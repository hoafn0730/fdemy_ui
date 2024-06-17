import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment, useEffect } from 'react';
import io from 'socket.io-client';
import { toast } from 'react-toastify';

import { DefaultLayout } from '~/layouts';
import { privateRoutes, publicRoutes } from '~/routes';
import AuthModal from '~/components/AuthModal';
import PrivateRoute from '~/components/PrivateRoute';
import NotFound from '~/pages/NotFound';
import Login from '~/pages/Login';
import useLocalStorage from '~/hooks/useLocalStorage';
import useTheme from '~/hooks/useTheme';
import useAccount from '~/hooks/useAccount';
import useAuthModal from '~/hooks/useAuthModal';
import { changeTheme } from '~/store/actions/themeAction';
import { doGetAccount } from '~/store/actions/accountAction';
import { addNewNotification } from './store/actions/notificationAction';
import useNotification from './hooks/useNotification';

const socket = io('http://localhost:5000');

function App() {
    const [theme, setTheme] = useLocalStorage('theme');
    const account = useAccount();
    const modal = useAuthModal();
    const { dispatch: dispatchNotify } = useNotification();
    const {
        state: { isDarkMode },
        dispatch,
    } = useTheme();

    useEffect(() => {
        if (theme) {
            dispatch(changeTheme(theme === 'dark'));
        } else {
            setTheme('light');
        }

        if (!account?.state?.userInfo?.accessToken) {
            doGetAccount({ ...account });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
            dispatchNotify(addNewNotification(data));
        });
    }, [dispatchNotify]);

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

                {modal.state.isOpen && (
                    <AuthModal>
                        <Login />
                    </AuthModal>
                )}
            </div>
        </Router>
    );
}

export default App;
