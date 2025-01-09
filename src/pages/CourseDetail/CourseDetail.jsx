import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBatteryFull, faCheck, faCirclePlay, faClock, faFilm, faGaugeHigh } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './CourseDetail.module.scss';
import CurriculumOfCourse from './CurriculumOfCourse';
import Button from '~/components/Button';
import Preview from '~/components/Preview';
import IndexModule from '~/components/IndexModule';
import ReviewComment from '~/components/ReviewComment';
import * as courseService from '~/services/courseService';
import * as registerService from '~/services/registerService';
import formatPrice from '~/utils/formatPrice';
import { openModal } from '~/store/actions/modalAction';

const cx = classnames.bind(styles);

function CourseDetail() {
    const dispatch = useDispatch();
    const { slug } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const [course, setCourse] = useState();
    const [openPreview, setOpenPreview] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const userInfo = useSelector((state) => state.user.userInfo);

    useEffect(() => {
        courseService.getCourseBySlug(slug).then((res) => {
            setCourse(res.course);

            setIsRegistered(userInfo?.courseIds.includes(res.course.id));
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleOpenPreview = () => setOpenPreview(true);

    const handleClickLearnNow = () => {
        if (!userInfo) {
            return dispatch(openModal());
        }

        if (isRegistered) {
            return navigate('/watch/' + slug);
        }

        if (course.price !== 0) {
            return navigate('/checkout/' + slug, { state: { backgroundLocation: location } });
        }

        registerService
            .registerCourse({
                courseId: course.id,
                userId: userInfo.id,
            })
            .then((res) => {
                navigate('/watch/' + slug);
            });
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

                    <ReviewComment />
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
                    {openPreview && (
                        <Preview title={course.title} video={course.video} onClose={() => setOpenPreview(false)} />
                    )}
                </IndexModule>
            </IndexModule>
        </IndexModule>
    );
}

export default CourseDetail;
