import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Popper.module.scss';

const cx = classnames.bind(styles);

function Wrapper({ children, className, ...props }) {
    return (
        <div className={cx('wrapper', className)} {...props}>
            {children}
        </div>
    );
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Wrapper;
