import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import styles from './Search.module.scss';
import PopperWrapper from '~/components/Popper/Wrapper';
import Button from '~/components/Button';
import CourseItem from '~/components/CourseItem';

const cx = classnames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <div>
            <HeadlessTippy
                visible={showResult}
                interactive={true}
                placement="bottom"
                render={(attrs) => {
                    return (
                        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                            <PopperWrapper>
                                <CourseItem />
                                <CourseItem />
                                <CourseItem />
                                <CourseItem />
                            </PopperWrapper>
                        </div>
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
                        onFocus={() => {
                            setShowResult(true);
                        }}
                    />

                    <Tippy content="search" placement="right">
                        <Button className={cx('btn-search')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Button>
                    </Tippy>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
