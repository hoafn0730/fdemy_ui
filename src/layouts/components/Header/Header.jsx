import { useState } from 'react';
import classnames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

import styles from './Header.module.scss';
import Search from '../Search';
import Menu from './Menu';
import config from '~/config';
import images from '~/assets/images';
import Button from '~/components/Button';
import { MessageIcon } from '~/components/Icon';
import Image from '~/components/Image';

const cx = classnames.bind(styles);

function Header() {
    const [isLogin] = useState(true);

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

                            <Menu>
                                <button className={cx('btn-action')}>
                                    <Image className={cx('avatar')} src={images.avatar} alt="avatar" />
                                </button>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button>Login</Button>
                            <Button>Sign Up</Button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
