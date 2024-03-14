import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment, useEffect } from 'react';

import { DefaultLayout } from '~/layouts';
import { publicRoutes } from '~/routes';
import { useTheme } from './contexts/themeContext';
import useLocalStorage from './hooks/useLocalStorage';
import { changeTheme } from './store/action/themeAction';

function App() {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setTheme(isDarkMode ? 'dark' : 'light');
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
