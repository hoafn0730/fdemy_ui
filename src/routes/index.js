import config from '~/config';

import Home from '~/pages/Home';
import CourseDetail from '~/pages/CourseDetail';
import About from '~/pages/About';
import Blog from '~/pages/Blog';
import Message from '~/pages/Message';
import Profile from '~/pages/Profile';
import RoadMap from '~/pages/RoadMap';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.about, component: About },
    { path: config.routes.detail, component: CourseDetail },
    { path: config.routes.roadMap, component: RoadMap },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.message, component: Message },
    { path: config.routes.profile, component: Profile },
];

export { publicRoutes };
