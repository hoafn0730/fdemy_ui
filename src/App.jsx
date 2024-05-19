import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment, useEffect } from 'react';

import { DefaultLayout } from '~/layouts';
import { privateRoutes, publicRoutes } from '~/routes';
import AuthModal from '~/components/AuthModal';
import PrivateRoute from '~/components/PrivateRoute';
import NotFound from '~/pages/NotFound';
import Login from '~/pages/Login';
import useLocalStorage from '~/hooks/useLocalStorage';
import useTheme from '~/hooks/useTheme';
import useAccount from '~/hooks/useAccount';
import { changeTheme } from '~/store/actions/themeAction';
import useAuthModal from '~/hooks/useAuthModal';
import { doGetAccount } from '~/store/actions/accountAction';

function App() {
    const [theme, setTheme] = useLocalStorage('theme');
    const account = useAccount();
    const modal = useAuthModal();

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
    }, []);

    useEffect(() => {
        setTheme(isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

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
