import classnames from 'classnames/bind';

import styles from './SideBar.module.scss';
import {
    BlogActiveIcon,
    BlogIcon,
    HomeActiveIcon,
    HomeIcon,
    MessageActiveIcon,
    MessageIcon,
    RoadMapActiveIcon,
    RoadMapIcon,
} from '~/components/Icons';
import config from '~/config';
import Menu from './Menu';
import MenuItem from './MenuItem';

const cx = classnames.bind(styles);

const LIST_SIDEBAR = [
    {
        title: 'Trang chủ',
        path: config.routes.home,
        icon: <HomeIcon />,
        iconActive: <HomeActiveIcon />,
    },
    {
        title: 'Lộ trình',
        path: config.routes.roadMap,
        icon: <RoadMapIcon />,
        iconActive: <RoadMapActiveIcon />,
    },
    {
        title: 'Bài viết',
        path: config.routes.blog,
        icon: <BlogIcon />,
        iconActive: <BlogActiveIcon />,
    },
    {
        title: 'Chat',
        path: config.routes.message,
        icon: <MessageIcon />,
        iconActive: <MessageActiveIcon />,
    },
];

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                {LIST_SIDEBAR.map((item, index) => {
                    return <MenuItem key={index} data={item} />;
                })}
            </Menu>
        </aside>
    );
}

export default SideBar;
