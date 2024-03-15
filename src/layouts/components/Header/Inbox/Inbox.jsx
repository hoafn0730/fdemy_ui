import HeadlessTippy from '@tippyjs/react/headless';
import PopperWrapper from '~/components/Popper';

function Inbox({ children, isShow, onHide }) {
    return (
        <div>
            <HeadlessTippy
                visible={isShow}
                interactive
                delay={[0, 200]}
                placement="bottom"
                render={(attrs) => {
                    return (
                        <PopperWrapper tabIndex={-1} {...attrs}>
                            <h3>1</h3>
                            <h3>1</h3>
                            <h3>1</h3>
                            <h3>1</h3>
                            <h3>1</h3>
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

export default Inbox;
