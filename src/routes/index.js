import config from '~/config';
import HeaderOnly from '~/layouts/HeaderOnly';

import Home from '~/pages/Home';
import CourseDetail from '~/pages/CourseDetail';
import Watch from '~/pages/Watch';
import Blog from '~/pages/Blog';
import BlogDetail from '~/pages/BlogDetail';
import RoadMap from '~/pages/RoadMap';
import RoadMapDetail from '~/pages/RoadMapDetail';
import About from '~/pages/About';
import Message from '~/pages/Message';
import Profile from '~/pages/Profile';
import Setting from '~/pages/Setting';
import Personal from '~/pages/Setting/Personal';
import Security from '~/pages/Setting/Security';
import NotFound from '~/pages/NotFound';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.about, component: About },
    { path: config.routes.detail, component: CourseDetail },
    { path: config.routes.watch, component: Watch, layout: null },
    { path: config.routes.roadMap, component: RoadMap },
    { path: config.routes.roadMapDetail, component: RoadMapDetail },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.blogDetail, component: BlogDetail },
    { path: config.routes.message, component: Message },
    { path: config.routes.profile, component: Profile, layout: HeaderOnly },
    {
        path: config.routes.setting,
        component: Setting,
        layout: HeaderOnly,
        children: [
            { path: 'personal', component: Personal },
            { path: 'security', component: Security },
        ],
    },
    { path: config.routes.notFound, component: NotFound, layout: null },
];

export { publicRoutes };
