import classnames from 'classnames/bind';

import styles from '../SideBar.module.scss';

const cx = classnames.bind(styles);

function Menu({ children }) {
    return <ul className={cx('list')}>{children}</ul>;
}

export default Menu;
