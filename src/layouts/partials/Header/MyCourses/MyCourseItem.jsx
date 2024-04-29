import Tippy from '@tippyjs/react';
import classnames from 'classnames/bind';

import styles from './MyCourses.module.scss';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

const cx = classnames.bind(styles);

function MyCourseItem({ title, image, to, process, createdAt }) {
    return (
        <div className={cx('course-item')}>
            <Link to={to} className={cx('course-link')}>
                <Image src={image} alt={title} className={cx('course-thumb')} />

                <div className={cx('course-info')}>
                    <h3 className={cx('course-title')}>{title}</h3>
                    <p className={cx('last-completed')}>
                        Học cách đây <span>{createdAt}</span> trước
                    </p>

                    <Tippy delay={[0, 200]} content={process} placement="bottom">
                        <div className={cx('VerticalProgressBar')} style={{ '--progress': `${process}%` }} />
                    </Tippy>
                </div>
            </Link>
        </div>
    );
}

export default MyCourseItem;
