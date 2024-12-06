import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment, useEffect } from 'react';
import io from 'socket.io-client';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { DefaultLayout } from '~/layouts';
import { privateRoutes, publicRoutes } from '~/routes';
import AuthModal from '~/components/AuthModal';
import PrivateRoute from '~/components/PrivateRoute';
import NotFound from '~/pages/NotFound';
import Login from '~/pages/Login';
import useLocalStorage from '~/hooks/useLocalStorage';
import { changeTheme } from '~/store/actions/themeAction';
import { doGetAccount } from '~/store/actions/authAction';
import { addNewNotification } from './store/actions/notificationAction';

const socket = io(process.env.REACT_APP_SOCKET_BACKEND_URL);

function App() {
    const { isDarkMode } = useSelector((state) => state.theme);
    const { userInfo } = useSelector((state) => state.user);
    const { isOpen } = useSelector((state) => state.authModal);
    const dispatch = useDispatch();
    const [theme, setTheme] = useLocalStorage('theme');

    useEffect(() => {
        if (theme) {
            dispatch(changeTheme(theme === 'dark'));
        } else {
            setTheme('light');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        sendNotification('Hello');
        dispatch(doGetAccount());
        if (!userInfo) {
        }

        window.addEventListener('message', (event) => {
            if (event.origin === process.env.REACT_APP_ACCOUNTS_URL) {
                // Thay đổi với tên miền của trang đăng nhập
                if (event.data === 'loginSuccess') {
                    window.location.reload(); // Tải lại trang chính
                }
            }
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission().then((permission) => {
                if (permission !== 'granted') {
                    console.warn('Notification permission denied.');
                }
            });
        }
    }, []);

    // Hàm gửi thông báo
    const sendNotification = (title) => {
        if (Notification.permission === 'granted') {
            const notification = new Notification(`Card "${title}" is due now!`, {
                body: 'Hãy kiểm tra và xử lý ngay!',
                icon: 'https://via.placeholder.com/100', // URL icon tùy chỉnh
                vibrate: [200, 100, 200], // Rung (chỉ hoạt động trên thiết bị hỗ trợ)
                badge: 'https://via.placeholder.com/50', // Icon nhỏ hiển thị trên màn hình
                actions: [
                    { action: 'view', title: 'Xem chi tiết', icon: 'https://via.placeholder.com/50' },
                    { action: 'dismiss', title: 'Bỏ qua', icon: 'https://via.placeholder.com/50' },
                ],
                requireInteraction: true, // Thông báo sẽ không tự động biến mất
                tag: 'card-due', // Gắn tag để tránh tạo trùng lặp thông báo
            });

            // Xử lý khi người dùng nhấp vào thông báo
            notification.onclick = () => {
                window.open('http://localhost:5173', '_blank');
                notification.close(); // Đóng thông báo sau khi nhấp
            };

            // Xử lý khi thông báo bị đóng
            notification.onclose = () => {
                console.log('Thông báo đã bị đóng.');
            };

            // Xử lý lỗi (nếu có)
            notification.onerror = (err) => {
                console.error('Lỗi thông báo:', err);
            };
        }
    };

    useEffect(() => {
        setTheme(isDarkMode ? 'dark' : 'light');
    }, [isDarkMode, setTheme]);

    useEffect(() => {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Router>
            <div className={'App' + (isDarkMode ? ' dark' : '')}>
                <Routes>
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
                                    <PrivateRoute>
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    </PrivateRoute>
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

                {isOpen && (
                    <AuthModal>
                        <Login />
                    </AuthModal>
                )}
            </div>
        </Router>
    );
}

export default App;
