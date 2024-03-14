import classnames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';

const cx = classnames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <main className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </main>
            {/* <Footer /> */}
        </div>
    );
}

export default DefaultLayout;
