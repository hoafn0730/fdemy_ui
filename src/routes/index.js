import config from '~/config';

import About from '~/pages/About';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.about, component: About },
    { path: config.routes.profile, component: Profile },
];

export { publicRoutes };
