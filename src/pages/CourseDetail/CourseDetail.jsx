import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBatteryFull, faCheck, faCirclePlay, faClock, faFilm, faGaugeHigh } from '@fortawesome/free-solid-svg-icons';

import styles from './CourseDetail.module.scss';
import CurriculumOfCourse from './CurriculumOfCourse';
import IndexModule from '~/components/IndexModule';
import Button from '~/components/Button';
import { usePreview } from '~/contexts/previewContext';
import { openPreview } from '~/store/action/previewAction';

const cx = classnames.bind(styles);

function CourseDetail() {
    const { dispatch } = usePreview();

    const data = {
        name: 'Lập Trình JavaScript Cơ Bản',
        desc: ' Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.',
    };

    const handleOpenPreview = () => {
        dispatch(openPreview());
    };

    return (
        <IndexModule className={cx('grid', 'wide')}>
            <IndexModule className={cx('row', 'wrapper')}>
                <IndexModule className={cx('col', 'l-8')}>
                    <h1 className={cx('courseName')}>{data.name}</h1>
                    <div className={cx('courseDesc')}>{data.desc}</div>
                    <CurriculumOfCourse />
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

                <IndexModule className={cx('col', 'l-4')}>
                    <div className={cx('purchaseBadge')}>
                        <div className={cx('preview')}>
                            <div
                                className={cx('bg')}
                                style={{
                                    backgroundImage: "url('https://files.fullstack.edu.vn/f8-prod/courses/1.png')",
                                }}
                            ></div>

                            <FontAwesomeIcon className={cx('icon')} icon={faCirclePlay} onClick={handleOpenPreview} />
                            <p>Xem giới thiệu khóa học</p>
                        </div>
                        <h5>Miễn phí</h5>
                        <Button primary className={cx('learnNow')}>
                            Đăng ký học
                        </Button>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faGaugeHigh} />
                                <span>Trình độ cơ bản</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faFilm} />
                                <span>
                                    Tổng số <strong>205</strong> bài học
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
                </IndexModule>
            </IndexModule>
        </IndexModule>
    );
}

export default CourseDetail;
