import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment, useEffect } from 'react';

import { DefaultLayout } from '~/layouts';
import { publicRoutes } from '~/routes';
import useLocalStorage from '~/hooks/useLocalStorage';
import NotFound from '~/pages/NotFound';
import useTheme from '~/hooks/useTheme';
import { changeTheme } from '~/store/actions/themeAction';

function App() {
    const currentUser = 1;

    const {
        state: { isDarkMode },
        dispatch,
    } = useTheme();

    const [theme, setTheme] = useLocalStorage('theme');

    useEffect(() => {
        if (theme) {
            dispatch(changeTheme(theme === 'dark'));
        } else {
            setTheme('light');
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

                    <Route path={'*'} element={NotFound} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
