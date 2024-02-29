import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './index-module.module.scss';

const cx = classnames.bind(styles);

function IndexModule({ children, className }) {
    const classes = cx(
        className.split(' ').reduce((prev, cur) => {
            return { ...prev, [cur]: cur };
        }, {}),
    );
    return <section className={classes}>{children}</section>;
}

IndexModule.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired,
};

export default IndexModule;
