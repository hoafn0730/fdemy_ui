import classnames from 'classnames/bind';
import { useState } from 'react';

import styles from './CurriculumOfCourse.module.scss';
import LessonItem from './LessonItem';
import Button from '~/components/Button';

const cx = classnames.bind(styles);

function CurriculumOfCourse() {
    const [isSeeMore, setIsSeeMore] = useState(false);
    const handleSeeMore = () => {
        setIsSeeMore((prev) => !prev);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('headerSticky')}>
                <h2 className={cx('heading')}>Nội dung khóa học</h2>
            </div>
            <div className={cx('curriculumPanel')}>
                <div
                    className={cx('panelGroup', {
                        show: isSeeMore,
                    })}
                >
                    {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((i, index) => (
                        <div key={index} className={cx('panel')}>
                            <div className={cx('panelBody')}>
                                <LessonItem />
                            </div>
                        </div>
                    ))}
                </div>
                <Button className={cx('seeMore')} onClick={handleSeeMore}>
                    {isSeeMore ? 'See less' : 'See more'}
                </Button>
            </div>
        </div>
    );
}

export default CurriculumOfCourse;
