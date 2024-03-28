import classnames from 'classnames/bind';

import styles from './CurriculumOfCourse.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const cx = classnames.bind(styles);

function LessonItem() {
    return (
        <div className={cx('lessonItem')}>
            <span className={cx('lessonName')}>
                <FontAwesomeIcon className={cx('icon')} icon={faCirclePlay} />
                1. Lời khuyên trước khóa học
            </span>
            <span className={cx('duration')}>04:20</span>
        </div>
    );
}

export default LessonItem;
