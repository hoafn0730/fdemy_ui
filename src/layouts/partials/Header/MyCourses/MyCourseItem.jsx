import Tippy from '@tippyjs/react';
import classnames from 'classnames/bind';

import styles from './MyCourses.module.scss';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

const cx = classnames.bind(styles);

function MyCourseItem() {
    const process = '30%';

    return (
        <div className={cx('course-item')}>
            <Link to="/" className={cx('course-link')}>
                <Image
                    src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png"
                    alt=""
                    className={cx('course-thumb')}
                />

                <div className={cx('course-info')}>
                    <h3 className={cx('course-title')}>ReactJs</h3>
                    <p className={cx('last-completed')}>
                        Học cách đây <span>4 tháng</span> trước
                    </p>

                    <Tippy delay={[0, 200]} content={process} placement="bottom">
                        <div className={cx('VerticalProgressBar')} style={{ '--progress': '30%' }} />
                    </Tippy>
                </div>
            </Link>
        </div>
    );
}

export default MyCourseItem;
