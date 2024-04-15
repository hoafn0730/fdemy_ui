import classnames from 'classnames/bind';

import styles from './Tracks.module.scss';

const cx = classnames.bind(styles);

function TrackItem({ title, image, index }) {
    return (
        <div className={cx('item')}>
            <span className={cx('index')}>{index}</span>
            <a href="watch-course.html" className={cx('link')}>
                <img src={image} alt={title} className={cx('thumb')} />
                <h3 className={cx('title')}>{title}</h3>
            </a>
        </div>
    );
}

export default TrackItem;
