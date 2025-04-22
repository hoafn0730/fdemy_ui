import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { useMediaQuery } from 'react-responsive';

import styles from './DefaultLayout.module.scss';
import Header from '../partials/Header';
import SideBar from '../partials/SideBar';
import Footer from '../partials/Footer';

const cx = classnames.bind(styles);

function DefaultLayout({ children }) {
    const isTabletOrMobile = useMediaQuery({ query: '(min-width: 1224px)' });

    return (
        <div className={cx('wrapper')}>
            <Header />
            <main className={cx('container')}>
                {isTabletOrMobile && (
                    <div className={cx('sidebar')}>
                        <SideBar />
                    </div>
                )}
                <div className={cx('content')}>{children}</div>
            </main>
            {/* <Footer /> */}
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
