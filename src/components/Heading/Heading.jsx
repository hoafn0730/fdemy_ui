import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './Heading.module.scss';

const cx = classnames.bind(styles);

function Heading({ title, updatedAt, className }) {
    return (
        <div className={cx('wrapper')}>
            <h1
                className={cx('heading', {
                    [className]: className,
                })}
            >
                {title}
            </h1>
            {updatedAt && <p className={cx('updated')}>Cập nhật {updatedAt}</p>}
        </div>
    );
}

Heading.propTypes = {
    title: PropTypes.string.isRequired,
    updatedAt: PropTypes.string,
};

export default Heading;
