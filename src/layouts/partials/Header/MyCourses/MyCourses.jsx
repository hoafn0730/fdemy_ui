import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';
import classnames from 'classnames/bind';

import styles from './MyCourses.module.scss';
import PopperWrapper from '~/components/Popper';
import HeaderPopper from '~/components/Popper/Header';
import MyCourseItem from './MyCourseItem';

const cx = classnames.bind(styles);

function MyCourses({ children, isShow, onHide }) {
    return (
        <div>
            <HeadlessTippy
                visible={isShow}
                interactive
                offset={[118, 10]}
                delay={[0, 200]}
                placement="bottom-end"
                render={(attrs) => {
                    return (
                        <PopperWrapper
                            className={cx('wrapper')}
                            position={{ top: '-16px', right: '150px' }}
                            tabIndex={-1}
                            {...attrs}
                        >
                            <HeaderPopper title={'My Courses'} titleBtn={'View all'} to={'/courses'} />
                            <div className={cx('content')}>
                                <MyCourseItem />
                                <MyCourseItem />
                                <MyCourseItem />
                                <MyCourseItem />
                                <MyCourseItem />
                                <MyCourseItem />
                                <MyCourseItem />
                                <MyCourseItem />
                                <MyCourseItem />
                            </div>
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

MyCourses.propTypes = {
    children: PropTypes.node.isRequired,
    isShow: PropTypes.bool,
    onHide: PropTypes.func,
};

export default MyCourses;
