import classnames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import config from '~/config';
import images from '~/assets/images';
import Search from '../Search';
import Menu from './Menu';
import Button from '~/components/Button';
import { MessageIcon } from '~/components/Icon';
import Image from '~/components/Image';
import { useState } from 'react';

const cx = classnames.bind(styles);

function Header() {
    const [isLogin] = useState(false);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faSeedling} />
                        <strong>hoafn.t_</strong>
                    </Link>
                </div>

                <div className={cx('body')}>
                    <Search />
                </div>

                <div className={cx('actions')}>
                    {isLogin ? (
                        <>
                            <Button>
                                <MessageIcon />
                            </Button>

                            <Menu>
                                <div className={cx('custom-btn')}>
                                    <Image src={images.avatar} alt="avatar" />
                                </div>
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
