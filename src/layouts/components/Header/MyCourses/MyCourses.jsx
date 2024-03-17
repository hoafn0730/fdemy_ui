import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';
import PopperWrapper from '~/components/Popper';

function MyCourses({ children, isShow, onHide }) {
    return (
        <div>
            <HeadlessTippy
                visible={isShow}
                interactive
                delay={[0, 200]}
                placement="bottom-end"
                render={(attrs) => {
                    return (
                        <PopperWrapper tabIndex={-1} {...attrs}>
                            <div style={{ width: '400px' }}>
                                <h3>1</h3>
                                <h3>1</h3>
                                <h3>1</h3>
                                <h3>1</h3>
                                <h3>1</h3>
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
