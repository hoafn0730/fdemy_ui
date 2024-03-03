import HeadlessTippy from '@tippyjs/react/headless';

import PopperWrapper from '~/components/Popper';

function Menu({ children }) {
    return (
        <HeadlessTippy
            delay={[0, 200]}
            interactive={true}
            placement="bottom"
            render={(attrs) => (
                <PopperWrapper>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </PopperWrapper>
            )}
        >
            {children}
        </HeadlessTippy>
    );
}

export default Menu;
