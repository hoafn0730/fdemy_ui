import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './ScrollList.module.scss';
import IndexModule from '../IndexModule';

const cx = classnames.bind(styles);

function ScrollList({ title, subTitle, label, action, render }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('sub-heading')}>{subTitle}</p>
            <div className={cx('heading-wrap')}>
                <h2 className={cx('heading')}>{title}</h2>
                <label className={cx('label')}>{label}</label>
                {action}
            </div>
            <div className={cx('body')}>
                <IndexModule className={cx('row')}>{render() || <></>}</IndexModule>
            </div>
        </div>
    );
}

ScrollList.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    label: PropTypes.string,
    render: PropTypes.func.isRequired,
};

export default ScrollList;
