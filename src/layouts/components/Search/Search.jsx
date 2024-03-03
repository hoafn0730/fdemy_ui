import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import classnames from 'classnames/bind';

import styles from './Search.module.scss';
import PopperWrapper from '~/components/Popper/Wrapper';

const cx = classnames.bind(styles);

function Search() {
    return (
        <h2>
            <HeadlessTippy
                render={(attrs) => {
                    return (
                        <PopperWrapper>
                            <span>123</span>
                            <span>123</span>
                            <span>123</span>
                            <span>123</span>
                        </PopperWrapper>
                    );
                }}
            >
                <div className={cx('search')}>Search</div>
            </HeadlessTippy>
        </h2>
    );
}

export default Search;
