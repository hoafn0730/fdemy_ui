import { useState } from 'react';
import classnames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEllipsisVertical, faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';

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
    KeyBoardIcon,
    LanguageIcon,
    LogoutIcon,
    MessageIcon,
    SettingIcon,
    UserIcon,
} from '~/components/Icons';
import Image from '~/components/Image';

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
        title: 'Keyboard shortcut',
        icon: <KeyBoardIcon />,
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

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faCode} />
                        <strong>CodeLearn</strong>
                    </Link>

                    <Button text to={'/about'}>
                        <div>About</div>
                    </Button>
                </div>

                <div className={cx('body')}>
                    <Search />
                </div>

                <div className={cx('actions')}>
                    {isLogin ? (
                        <>
                            <Tippy content="Message">
                                <button className={cx('btn-action')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Create">
                                <button className={cx('btn-action')}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button>Login</Button>
                            <Button>Sign Up</Button>
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
