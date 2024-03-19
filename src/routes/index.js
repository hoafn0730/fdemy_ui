import config from '~/config';

import About from '~/pages/About';
import Home from '~/pages/Home';
import RoadMap from '~/pages/RoadMap';
import Profile from '~/pages/Profile';
import Blog from '~/pages/Blog';
import Message from '~/pages/Message';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.about, component: About },
    { path: config.routes.roadMap, component: RoadMap },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.message, component: Message },
    { path: config.routes.profile, component: Profile },
];

export { publicRoutes };
