import { useNavigate, useParams } from 'react-router-dom';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { vi } from 'date-fns/locale';
import { formatDistanceToNow } from 'date-fns';

import styles from './Profile.module.scss';
import IndexModule from '~/components/IndexModule';
import images from '~/assets/images';
import Avatar from '~/components/Avatar';
import Box from '~/components/Box';
import { getUser } from '~/services/userService';

const cx = classnames.bind(styles);

function Profile() {
    const { username } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState();

    useEffect(() => {
        if (!username.startsWith('@')) {
            return navigate('/not-found');
        }
        getUser(username.substring(1)).then((res) => setUser(res));

        // * check profile exist
        if (username.substring(1) !== user.username) {
            // navigate('/not-found');
        }
    }, [navigate, user, username]);

    return (
        <div className={cx('wrapper')}>
            <IndexModule className={cx('grid', 'wide')} style={{ maxWidth: 1100 }}>
                <div className={cx('banner')} style={{ backgroundImage: `url(${images.banner})` }}>
                    <div className={cx('user')}>
                        <div className={cx('user-avatar')}>
                            <Avatar src={user.avatar} alt={user.fullName} />
                        </div>
                        <div className={cx('user-name')}>
                            <span>{user.fullName}</span>
                        </div>
                    </div>
                </div>
                <div className={cx('container')}>
                    <IndexModule className={cx('row')}>
                        <IndexModule className={cx('col', 'l-5')}>
                            <Box title={'Introduction'}>
                                <div className={cx('info')}>
                                    <div>
                                        <div className={cx('info-icon')}>
                                            <FontAwesomeIcon icon={faUserGroup} />
                                        </div>
                                        <span>
                                            Thành viên của
                                            <span className={cx('highlight')}> Fdemy </span>
                                            từ{' '}
                                            {formatDistanceToNow(new Date(user.createdAt || new Date()), {
                                                addSuffix: true,
                                                locale: vi,
                                            })}
                                        </span>
                                    </div>
                                    <div>
                                        <div className={cx('info-icon')}>
                                            <FontAwesomeIcon icon={faHouse} />
                                        </div>
                                        <span>
                                            Sống tại
                                            <span className={cx('highlight')}> Hưng Yên </span>
                                        </span>
                                    </div>
                                </div>
                            </Box>
                        </IndexModule>
                        <IndexModule className={cx('col', 'l-7')}>
                            <Box title={'My courses'}>
                                <div className={cx('inner')}>
                                    <a className={cx('thumb')} href="/courses/html-css">
                                        <img
                                            src="https://files.fullstack.edu.vn/f8-prod/courses/2.png"
                                            className={cx('img')}
                                            alt="HTML CSS từ Zero đến Hero"
                                        />
                                    </a>
                                    <div className={cx('info')}>
                                        <h3 className={cx('info-title')}>
                                            <a href="/courses/html-css">HTML CSS từ Zero đến Hero</a>
                                        </h3>
                                        <p className={cx('info-desc')}>
                                            Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The
                                            Band &amp; Shopee.
                                        </p>
                                    </div>
                                </div>
                                <div className={cx('inner')}>
                                    <a className={cx('thumb')} href="/courses/html-css">
                                        <img
                                            src="https://files.fullstack.edu.vn/f8-prod/courses/2.png"
                                            className={cx('img')}
                                            alt="HTML CSS từ Zero đến Hero"
                                        />
                                    </a>
                                    <div className={cx('info')}>
                                        <h3 className={cx('info-title')}>
                                            <a href="/courses/html-css">HTML CSS từ Zero đến Hero</a>
                                        </h3>
                                        <p className={cx('info-desc')}>
                                            Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The
                                            Band &amp; Shopee.
                                        </p>
                                    </div>
                                </div>
                                <div className={cx('inner')}>
                                    <a className={cx('thumb')} href="/courses/html-css">
                                        <img
                                            src="https://files.fullstack.edu.vn/f8-prod/courses/2.png"
                                            className={cx('img')}
                                            alt="HTML CSS từ Zero đến Hero"
                                        />
                                    </a>
                                    <div className={cx('info')}>
                                        <h3 className={cx('info-title')}>
                                            <a href="/courses/html-css">HTML CSS từ Zero đến Hero</a>
                                        </h3>
                                        <p className={cx('info-desc')}>
                                            Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The
                                            Band &amp; Shopee.
                                        </p>
                                    </div>
                                </div>
                            </Box>
                        </IndexModule>
                    </IndexModule>
                </div>
            </IndexModule>
        </div>
    );
}

export default Profile;
