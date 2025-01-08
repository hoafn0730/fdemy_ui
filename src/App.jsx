import { Routes, Route, useLocation } from 'react-router-dom';
import { Fragment, useEffect } from 'react';
import io from 'socket.io-client';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { DefaultLayout } from '~/layouts';
import { privateRoutes, publicRoutes } from '~/routes';
import Modal from '~/components/Modal';
// import PrivateRoute from '~/components/PrivateRoute';
import NotFound from '~/pages/NotFound';
import useLocalStorage from '~/hooks/useLocalStorage';
import { changeTheme } from '~/store/actions/themeAction';
import { doGetAccount } from '~/store/actions/authAction';
import { addNewNotification } from './store/actions/notificationAction';
import Checkout from './pages/Checkout';
import config from './config';
import { closeModal } from './store/actions/modalAction';

const socket = io(process.env.REACT_APP_SOCKET_BACKEND_URL);

function App() {
    const dispatch = useDispatch();
    const location = useLocation();
    const { isDarkMode } = useSelector((state) => state.theme);
    // const { userInfo } = useSelector((state) => state.user);
    const { isOpen } = useSelector((state) => state.modal);
    const [theme, setTheme] = useLocalStorage('theme');
    const state = location.state;

    useEffect(() => {
        // if (!userInfo) {
        dispatch(doGetAccount());
        // }

        window.addEventListener('message', (event) => {
            if (event.origin === process.env.REACT_APP_ACCOUNTS_URL) {
                // Thay đổi với tên miền của trang đăng nhập
                if (event.data === 'loginSuccess') {
                    window.location.reload(); // Tải lại trang chính
                }
            }
        });

        socket.on('notification', (data) => {
            toast.success(data.message, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
            dispatch(addNewNotification(data));
        });

        if (theme) {
            dispatch(changeTheme(theme === 'dark'));
        } else {
            setTheme('light');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setTheme(isDarkMode ? 'dark' : 'light');
    }, [isDarkMode, setTheme]);

    return (
        <div className={'App' + (isDarkMode ? ' dark' : '')}>
            <Routes location={state?.backgroundLocation || location}>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        >
                            {route.children &&
                                route.children.map((routeChild, index) => {
                                    const PageChild = routeChild.component;
                                    return <Route key={index} path={routeChild.path} element={<PageChild />} />;
                                })}
                        </Route>
                    );
                })}
                {privateRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                // <PrivateRoute>
                                <Layout>
                                    <Page />
                                </Layout>
                                // </PrivateRoute>
                            }
                        >
                            {route.children &&
                                route.children.map((routeChild, index) => {
                                    const PageChild = routeChild.component;
                                    return <Route key={index} path={routeChild.path} element={<PageChild />} />;
                                })}
                        </Route>
                    );
                })}
                <Route path={'*'} element={NotFound} />
            </Routes>

            {state?.backgroundLocation && (
                <Routes>
                    <Route path={config.routes.checkout} element={<Checkout />} />
                </Routes>
            )}

            {/* Login Modal */}
            <Modal open={isOpen} onClose={() => dispatch(closeModal())}>
                <iframe
                    title="1"
                    src={`${process.env.REACT_APP_ACCOUNTS_LOGIN_URL}?continue=${encodeURIComponent(
                        window.location.origin,
                    )}&popup=1`}
                    frameborder="0"
                ></iframe>
            </Modal>
        </div>
    );
}

export default App;
