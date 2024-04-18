import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';
import classnames from 'classnames/bind';

import styles from './Category.module.scss';
import CategoryItem from './CategoryItem';
import PopperWrapper from '~/components/Popper';
import HeaderPopper from '~/components/Popper/Header';

const cx = classnames.bind(styles);

function Category({ children, isShow, onHide }) {
    return (
        <div>
            <HeadlessTippy
                visible={isShow}
                interactive
                offset={[0, 10]}
                delay={[0, 200]}
                placement="bottom-start"
                render={(attrs) => {
                    return (
                        <PopperWrapper
                            className={cx('wrapper')}
                            position={{ top: '-16px', left: '40px' }}
                            tabIndex={-1}
                            {...attrs}
                        >
                            <HeaderPopper title={'Categories'} />
                            <div className={cx('content')}>
                                <CategoryItem />
                                <CategoryItem />
                                <CategoryItem />
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

Category.propTypes = {
    children: PropTypes.node.isRequired,
    isShow: PropTypes.bool,
    onHide: PropTypes.func,
};

export default Category;
