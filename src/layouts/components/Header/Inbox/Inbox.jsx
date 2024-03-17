import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';
import classnames from 'classnames/bind';

import styles from './Inbox.module.scss';
import InboxItem from './InboxItem';
import PopperWrapper from '~/components/Popper';
import Button from '~/components/Button';
import { ArrowIcon } from '~/components/Icons';

const cx = classnames.bind(styles);

function Inbox({ children, isShow, onHide }) {
    return (
        <div>
            <HeadlessTippy
                visible={isShow}
                interactive
                offset={[60, 4]}
                delay={[0, 200]}
                placement="bottom-end"
                render={(attrs) => {
                    return (
                        <PopperWrapper className={cx('wrapper')} tabIndex={-1} {...attrs}>
                            <div className={cx('header')}>
                                <h6>Notifications</h6>
                                <Button text className={cx('viewAllBtn')}>
                                    Mark as read
                                </Button>
                            </div>
                            <div className={cx('content')}>
                                <InboxItem
                                    data={{
                                        noSeen: true,
                                    }}
                                />
                                <InboxItem />
                                <InboxItem />
                                <InboxItem />
                                <InboxItem />
                                <InboxItem />
                                <InboxItem />
                            </div>
                            <Button to={'/notifications'} className={cx('seeAll')}>
                                See all notifications
                            </Button>
                            <ArrowIcon className={cx('styledArrow')} />
                        </PopperWrapper>
                    );
                }}
                onClickOutside={onHide}
            >
                {children}
            </HeadlessTippy>
        </div>
    );
}

Inbox.propTypes = {
    children: PropTypes.node.isRequired,
    isShow: PropTypes.bool,
    onHide: PropTypes.func,
};

export default Inbox;
