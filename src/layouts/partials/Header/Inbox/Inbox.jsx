import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';
import classnames from 'classnames/bind';

import styles from './Inbox.module.scss';
import InboxItem from './InboxItem';
import PopperWrapper from '~/components/Popper';
import HeaderPopper from '~/components/Popper/Header';
import Button from '~/components/Button';

const cx = classnames.bind(styles);

function Inbox({ children, isShow, onHide }) {
    return (
        <div>
            <HeadlessTippy
                visible={isShow}
                interactive
                offset={[64, 4]}
                delay={[0, 200]}
                placement="bottom-end"
                render={(attrs) => {
                    return (
                        <PopperWrapper
                            className={cx('wrapper')}
                            position={{ top: '-16px', right: '80px' }}
                            tabIndex={-1}
                            {...attrs}
                        >
                            <HeaderPopper title={'Notifications'} titleBtn={'Mark as read'} />
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
