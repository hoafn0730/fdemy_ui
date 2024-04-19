import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './Tracks.module.scss';

const cx = classnames.bind(styles);

function TrackItem({ title, image, index }) {
    return (
        <div
            className={cx('item', {
                active: true,
            })}
        >
            <span className={cx('index')}>{index}</span>
            <a href="watch-course.html" className={cx('link')}>
                <img src={image} alt={title} className={cx('thumb')} />
                <h3 className={cx('title')}>{title}</h3>
            </a>
        </div>
    );
}

TrackItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    index: PropTypes.string.isRequired,
};

export default TrackItem;
