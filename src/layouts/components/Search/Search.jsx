import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Search.module.scss';
import PopperWrapper from '~/components/Popper/Wrapper';
import SearchItem from '~/layouts/components/Search/SearchItem';

const cx = classnames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);

            if (searchValue) {
                setShowResult(true);
            } else {
                setShowResult(false);
            }
        }
    };

    const handleFocus = (e) => {
        if (e.target.value) {
            setShowResult(true);
        }
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleClearText = () => {
        setSearchValue('');
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            visible={showResult}
            interactive={true}
            placement="bottom"
            render={(attrs) => {
                return (
                    <PopperWrapper tabIndex={-1} {...attrs}>
                        <div className={cx('result')}>
                            <div className={cx('header')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon')} />
                                <span>Kết quả cho '{searchValue}'</span>
                            </div>

                            <div className={cx('heading')}>
                                <h5>KHÓA HỌC</h5>
                                <Link to="/" className={cx('seeMore')}>
                                    Xem thêm
                                </Link>
                            </div>
                            <SearchItem />
                            <SearchItem />
                            <SearchItem />
                            <SearchItem />
                            <SearchItem />
                        </div>
                    </PopperWrapper>
                );
            }}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    value={searchValue}
                    type="text"
                    className={cx('search-input')}
                    placeholder="search..."
                    onChange={handleChange}
                    onFocus={handleFocus}
                />

                {searchValue && (
                    <div className={cx('clearText')} onClick={handleClearText}>
                        &times;
                    </div>
                )}

                <Tippy delay={[0, 200]} content="search" placement="right">
                    <button
                        className={cx('btn-search')}
                        onClick={() => {
                            alert('123');
                        }}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </Tippy>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
