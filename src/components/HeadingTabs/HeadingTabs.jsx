import classnames from 'classnames/bind';

import styles from './HeadingTabs.module.scss';

const cx = classnames.bind(styles);

function HeadingTabs() {
    return <div className={cx('wrapper')}></div>;
}

export default HeadingTabs;
