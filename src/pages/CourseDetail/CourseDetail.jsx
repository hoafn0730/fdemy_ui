import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBatteryFull, faCheck, faCirclePlay, faClock, faFilm, faGaugeHigh } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './CourseDetail.module.scss';
import CurriculumOfCourse from './CurriculumOfCourse';
import Button from '~/components/Button';
import IndexModule from '~/components/IndexModule';
import Preview from '~/components/Preview';
import usePreview from '~/hooks/usePreview';
import { openPreview } from '~/store/actions/previewAction';
import * as courseService from '~/services/courseService';
import * as registerService from '~/services/registerService';
import useAccount from '~/hooks/useAccount';
import useAuthModal from '~/hooks/useAuthModal';
import { openAuthModal } from '~/store/actions/authModalAction';
import formatPrice from '~/utils/formatPrice';

const cx = classnames.bind(styles);

function CourseDetail() {
    const [course, setCourse] = useState();
    const [isRegistered, setIsRegistered] = useState(false);
    const {
        state: { isOpen },
        dispatch,
    } = usePreview();
    const account = useAccount();
    console.log('🚀 ~ CourseDetail ~ account:', account);
    const modal = useAuthModal();
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        courseService.getCourseBySlug(slug).then((res) => {
            setCourse(res.course);
            setIsRegistered(res.isRegistered);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleOpenPreview = () => {
        dispatch(openPreview());
    };

    const handleClickLearnNow = () => {
        if (isRegistered) {
            navigate('/watch/' + course?.slug);
        } else {
            if (course.price === 0) {
                if (account.state.isLogin) {
                    registerService
                        .registerCourse({
                            courseId: course.id,
                            userId: 1,
                        })
                        .then((res) => {
                            navigate('/watch/' + course?.slug);
                        });
                } else {
                    modal.dispatch(openAuthModal());
                }
            } else {
                navigate('/checkout/' + course?.slug);
            }
        }
    };

    return (
        <IndexModule className={cx('grid', 'wide')}>
            <IndexModule className={cx('row', 'wrapper')}>
                <IndexModule className={cx('col', 'l-8', 'm-12', 'c-12')}>
                    <h1 className={cx('courseName')}>{course?.title}</h1>
                    <div className={cx('courseDesc')}>{course?.description}</div>
                    <CurriculumOfCourse track={course?.track} />

                    <div className={cx('topicList')}>
                        <h2 className={cx('topicHeading')}>Yêu cầu</h2>
                        <IndexModule className={cx('row')}>
                            <IndexModule className={cx('col', 'l-12')}>
                                <ul className={cx('list', 'column')}>
                                    <li>
                                        <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                                        <span>Máy vi tính kết nối internet (Windows, Ubuntu hoặc MacOS)</span>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                                        <span>
                                            Ý thức tự học cao, trách nhiệm cao, kiên trì bền bỉ không ngại cái khó
                                        </span>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                                        <span>Không được nóng vội, bình tĩnh học, làm bài tập sau mỗi bài học</span>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                                        <span>
                                            Khi học nếu có khúc mắc hãy tham gia hỏi/đáp tại group FB: Học lập trình web
                                            (fullstack.edu.vn)
                                        </span>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                                        <span>
                                            Bạn không cần biết gì hơn nữa, trong khóa học tôi sẽ chỉ cho bạn những gì
                                            bạn cần phải biết
                                        </span>
                                    </li>
                                </ul>
                            </IndexModule>
                        </IndexModule>
                    </div>
                </IndexModule>

                <IndexModule className={cx('col', 'l-4', 'm-10', 'c-12')}>
                    <div className={cx('purchaseBadge')}>
                        <div className={cx('preview')}>
                            <div
                                className={cx('bg')}
                                style={{
                                    backgroundImage: `url('${course?.image}')`,
                                }}
                            ></div>

                            <FontAwesomeIcon className={cx('icon')} icon={faCirclePlay} onClick={handleOpenPreview} />
                            <p>Xem giới thiệu khóa học</p>
                        </div>
                        <h5>{course?.price > 0 ? formatPrice(course.price) : 'Miễn phí'}</h5>
                        <Button primary className={cx('learnNow')} onClick={handleClickLearnNow}>
                            {isRegistered ? 'Vào học' : 'Đăng ký học'}
                        </Button>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faGaugeHigh} />
                                <span>Trình độ cơ bản</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faFilm} />
                                <span>
                                    Tổng số <strong>{course?.track?.steps.length}</strong> bài học
                                </span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faClock} />
                                <span>
                                    Thời lượng <strong>29 giờ 13 phút</strong>
                                </span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBatteryFull} />
                                <span>Học mọi lúc, mọi nơi</span>
                            </li>
                        </ul>
                    </div>
                    {isOpen && <Preview title={course.title} video={course.video} />}
                </IndexModule>
            </IndexModule>
        </IndexModule>
    );
}

export default CourseDetail;
