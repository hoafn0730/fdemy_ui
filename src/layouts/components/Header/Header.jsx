import { useRef, useState } from 'react';
import classnames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEllipsisVertical, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import Search from '../Search';
import Menu from './Menu';
import config from '~/config';
import images from '~/assets/images';
import Button from '~/components/Button';
import {
    BookMarkIcon,
    DarkModeIcon,
    FeedBackIcon,
    InboxActiveIcon,
    InboxIcon,
    LanguageIcon,
    LogoutIcon,
    SettingIcon,
    UserIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import Inbox from './Inbox';
import MyCourses from './MyCourses';

const cx = classnames.bind(styles);

const MENU_ITEMS = [
    {
        title: 'English',
        icon: <LanguageIcon />,
        children: {
            title: 'language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        title: 'Feedback and help',
        icon: <FeedBackIcon />,
        to: '/feedback',
    },
    {
        title: 'Dark mode',
        type: 'theme',
        icon: <DarkModeIcon />,
        toggle: true,
    },
];

function Header() {
    const [isLogin] = useState(true);
    const [showPopper, setShowPopper] = useState({ inbox: false, myCourses: false });
    const firstClickRef = useRef({ inbox: false, myCourses: false });
    const username = 'hoafn0730';

    const userMenu = [
        {
            title: 'Profile',
            icon: <UserIcon />,
            to: '/@' + username,
        },
        {
            title: 'Bookmarks',
            icon: <BookMarkIcon />,
            to: '/bookmarks',
        },
        {
            title: 'Blogs',
            icon: <FontAwesomeIcon icon={faPenToSquare} />,
            to: '/blogs',
        },
        {
            title: 'Settings',
            icon: <SettingIcon />,
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            title: 'Log out',
            icon: <LogoutIcon />,
            separate: true,
        },
    ];

    const handleShowPopper = (e) => {
        const { id } = e.target.closest('.Header_btn-action__DisSd');

        if (id === 'my-courses') {
            firstClickRef.current.myCourses = !firstClickRef.current.myCourses;
            if (firstClickRef.current.myCourses) {
                setShowPopper({ myCourses: true });
            } else {
                setShowPopper({ myCourses: false });
            }
        } else if (id === 'inbox') {
            firstClickRef.current.inbox = !firstClickRef.current.inbox;
            if (firstClickRef.current.inbox) {
                setShowPopper({ inbox: true });
            } else {
                setShowPopper({ inbox: false });
            }
        }
    };

    const handleHidePopper = () => {
        firstClickRef.current = {
            myCourses: false,
            inbox: false,
        };
        setShowPopper({ inbox: false, myCourses: false });
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faCode} />
                        <strong>CodeLearn</strong>
                    </Link>

                    <Button text to={'/about'}>
                        <div>Categories</div>
                    </Button>
                </div>

                <div className={cx('body')}>
                    <Search />
                </div>

                <div className={cx('actions')}>
                    {isLogin ? (
                        <>
                            <MyCourses isShow={showPopper.myCourses} onHide={handleHidePopper}>
                                <Tippy disabled={showPopper.myCourses} content="My Courses">
                                    <button id="my-courses" className={cx('btn-action')} onClick={handleShowPopper}>
                                        <span>My Courses</span>
                                    </button>
                                </Tippy>
                            </MyCourses>

                            <Inbox isShow={showPopper.inbox} onHide={handleHidePopper}>
                                <Tippy disabled={showPopper.inbox} content="Inbox">
                                    <button id="inbox" className={cx('btn-action')} onClick={handleShowPopper}>
                                        {showPopper.inbox ? <InboxActiveIcon /> : <InboxIcon />}
                                    </button>
                                </Tippy>
                            </Inbox>
                        </>
                    ) : (
                        <>
                            <Button to={'login'}>Login</Button>
                        </>
                    )}

                    <Menu isLogin={isLogin} items={isLogin ? userMenu : MENU_ITEMS}>
                        {isLogin ? (
                            <button className={cx('btn-action')}>
                                <Image className={cx('avatar')} src={images.avatar} alt="avatar" />
                            </button>
                        ) : (
                            <button className={cx('btn-action')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
