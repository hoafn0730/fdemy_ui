import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import styles from './Watch.module.scss';
import Header from './Header';
import Video from './Video';
import Tracks from './Tracks';
import Quiz from './Quiz';
import ActionBar from '~/components/ActionBar';
import Button from '~/components/Button';
import Comment from '~/components/Comment';
import Drawer from '~/components/Drawer';
import { openModal } from '~/store/actions/modalAction';
import * as watchService from '~/services/watchService';

const cx = classnames.bind(styles);

function Watch() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const { slug } = useParams();
    const { id: stepId } = Object.fromEntries([...searchParams]);

    const [track, setTrack] = useState();
    const [process, setProcess] = useState([]);
    const [currentStep, setCurrentStep] = useState();
    const [nextStep, setNextStep] = useState();
    const [prevStep, setPrevStep] = useState();
    const [isShowTracks, setIsShowTracks] = useState(true);
    const [isShowComments, setIsShowComments] = useState(false);
    const [isShowQuiz, setIsShowQuiz] = useState(false);
    const [player, setPlayer] = useState(null);
    const [previousTime, setPreviousTime] = useState(0);
    const skipThreshold = 10;
    const { lesson } = currentStep || { lesson: {} };

    useEffect(() => {
        (async () => {
            const {
                data: { track, userProcess },
            } = await watchService.getTracks(slug);

            if (!stepId) {
                if (!userProcess.length && !!track.steps.length) {
                    await watchService.saveUserProcess(track.steps[0].uuid);
                    userProcess.push(track.steps[0].id);

                    navigate(`/watch/${slug}?id=${track.steps[0].uuid}`, { replace: true });
                } else {
                    const latestStep = track.steps?.find((step) => step.id === userProcess[userProcess.length - 1]);

                    navigate(`/watch/${slug}?id=${latestStep.uuid}`, { replace: true });
                }
            } else {
                if (!userProcess.length && !!track.steps.length && stepId === track.steps[0].uuid) {
                    await watchService.saveUserProcess(track.steps[0].uuid);
                    userProcess.push(track.steps[0].id);
                }
            }

            setTrack(track);
            setProcess(userProcess);
        })();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        (async () => {
            if (stepId) {
                const res = await watchService.getStep(stepId);

                setCurrentStep(res.data.step);
                setNextStep(res.data.nextStep);
                setPrevStep(res.data.prevStep);
            }
        })();
        return () => clearInterval(window.videoInterval);
    }, [stepId]);

    const handleShowTracks = () => {
        setIsShowTracks((prev) => !prev);
    };

    const handleShowComments = () => {
        if (!isShowComments) {
            setIsShowComments(true);
        } else {
            dispatch(openModal());
        }
    };

    const handleReady = (event) => {
        const playerInstance = event.target;
        setPlayer(playerInstance);
    };

    const handleStateChange = async (event) => {
        // Kiểm tra trạng thái video
        if (event.data === 1) {
            // PLAYING state
            // Đảm bảo không tạo nhiều interval khi hàm được gọi nhiều lần
            if (window.videoInterval) return;

            const duration = player.getDuration();
            window.videoInterval = setInterval(async () => {
                if (player) {
                    const currentTime = player.getCurrentTime();
                    const step = track?.steps?.find((step) => step.uuid === nextStep);

                    if (process.includes(step?.id)) {
                        clearInterval(window.videoInterval); // Dọn dẹp interval
                        return (window.videoInterval = null); // Reset interval tracker
                    }

                    // Kiểm tra nếu người dùng tua nhanh hơn ngưỡng cho phép
                    if (Math.round(currentTime - previousTime) > skipThreshold) {
                        toast('Bạn đã tua quá nhanh! Đưa về thời gian trước đó.');
                        player.seekTo(previousTime); // Đưa video về thời gian trước đó
                    } else {
                        console.log(123);

                        if (Math.round(currentTime / duration) * 100 > 70 && !process.includes(step?.id)) {
                            watchService.saveUserProcess(step.uuid).then(() => {
                                setProcess((prev) => [...prev, step.id]);
                                toast('Quá trình được lưu thành công!');
                            });

                            clearInterval(window.videoInterval); // Dọn dẹp interval
                            return (window.videoInterval = null); // Reset interval tracker
                        }

                        setPreviousTime(currentTime); // Cập nhật thời gian hiện tại
                    }
                }
            }, 1000); // Kiểm tra mỗi giây
        } else {
            // Khi video dừng hoặc không phải PLAYING, xóa interval
            clearInterval(window.videoInterval);
            window.videoInterval = null;
        }
    };

    const handleOpenQuiz = () => {
        if (lesson?.quizzes.length > 0) {
            setIsShowQuiz(true);
        }
    };

    const handleCloseQuiz = () => {
        setIsShowQuiz(false);
    };

    return (
        <div className={cx('wrapper')}>
            <Header track={track} process={process} isQuiz={isShowQuiz} onCloseQuiz={handleCloseQuiz} />
            <div className={cx('content')}>
                {isShowQuiz && lesson?.quizzes.length > 0 ? (
                    <Quiz data={lesson?.quizzes} onClose={handleCloseQuiz} />
                ) : (
                    <Video
                        title={lesson?.title}
                        video={lesson?.video}
                        type={lesson?.videoType}
                        content={lesson?.content}
                        hasQuiz={!!lesson?.quizzes?.length}
                        onOpenQuiz={handleOpenQuiz}
                        onReady={handleReady}
                        onStateChange={handleStateChange}
                    />
                )}

                {isShowTracks && <Tracks steps={track?.steps} process={process} onChangeShow={handleShowTracks} />}
            </div>
            <ActionBar
                canNext={process?.includes(track?.steps?.find((step) => step.uuid === nextStep)?.id)}
                prevStep={prevStep}
                nextStep={nextStep}
                isShowTracks={isShowTracks}
                onChangeShow={handleShowTracks}
            />
            <Button
                rounded
                className={cx('commentBtn')}
                leftIcon={<FontAwesomeIcon icon={faComments} />}
                onClick={handleShowComments}
            >
                Hỏi đáp
            </Button>
            <Drawer open={isShowComments} onClose={() => setIsShowComments(false)}>
                <Comment />
            </Drawer>
        </div>
    );
}

export default Watch;
