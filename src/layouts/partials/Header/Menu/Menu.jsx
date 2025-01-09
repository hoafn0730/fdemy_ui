import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';
import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Menu.module.scss';
import Header from './Header';
import MenuItem from './MenuItem';
import Image from '~/components/Image';
import Popper from '~/components/Popper';
import { changeTheme } from '~/store/actions/themeAction';
import { doLogout } from '~/store/actions/authAction';

const cx = classnames.bind(styles);

function Menu({ children, isShow, isLogin, items = [], onHide }) {
    const dispatch = useDispatch();
    const { isDarkMode } = useSelector((state) => state.theme);
    const { userInfo } = useSelector((state) => state.user);
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    useEffect(() => {
        setHistory([{ data: items }]);
    }, [items]);

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            if (item.toggle) {
                item.isDarkMode = isDarkMode;
            }

            return (
                <MenuItem
                    key={index}
                    data={item}
                    toggle={item.toggle}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const onChange = (menuItem) => {
        switch (menuItem.type) {
            case 'theme': {
                return dispatch(changeTheme(!isDarkMode));
            }
            case 'language': {
                return console.log(menuItem);
            }
            case 'logout': {
                dispatch(doLogout());

                return;
            }
            default:
        }
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, history.length - 1));
    };

    return (
        <HeadlessTippy
            visible={isShow}
            delay={[0, 200]}
            offset={[13, 4]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <Popper.Wrapper
                    className={cx('wrapper')}
                    position={{ top: '-16px', right: '28px' }}
                    tabIndex={-1}
                    {...attrs}
                >
                    <div className={cx('list')}>
                        {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                        {isLogin && !(history.length > 1) && (
                            <div className={cx('user')}>
                                <Image src={userInfo.avatar} alt={userInfo.fullName} className={cx('avatar')} />
                                <div className={cx('info')}>
                                    <span className={cx('name')}>{userInfo.fullName}</span>
                                    <div className={cx('username')}>
                                        @<span>{userInfo.username}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className={cx('body')}>{renderItems()}</div>
                    </div>
                </Popper.Wrapper>
            )}
            onClickOutside={onHide}
        >
            {children}
        </HeadlessTippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array.isRequired,
    isShow: PropTypes.bool,
    isLogin: PropTypes.bool,
    onHide: PropTypes.func,
};

export default Menu;
