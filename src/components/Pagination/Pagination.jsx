import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

import styles from './Pagination.module.scss';
import Button from '../Button';

const cx = classnames.bind(styles);

function Pagination() {
    // eslint-disable-next-line no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page');
    const [query] = useState(searchParams.get('q'));

    return (
        <div className={cx('wrapper')}>
            <Button to={`/search?q=${query}&page=${+page - 1}`} className={cx('btn', 'prev')}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </Button>
            <Button
                to={`/search?q=${query}&page=${1}`}
                className={cx('btn', {
                    active: +page === 1,
                })}
            >
                1
            </Button>
            <Button
                to={`/search?q=${query}&page=${2}`}
                className={cx('btn', {
                    active: +page === 2,
                })}
            >
                2
            </Button>
            <Button
                to={`/search?q=${query}&page=${3}`}
                className={cx('btn', {
                    active: +page === 3,
                })}
            >
                3
            </Button>
            <Button to={`/search?q=${query}&page=${+page + 1}`} className={cx('btn', 'next')}>
                <FontAwesomeIcon icon={faAngleRight} />
            </Button>
        </div>
    );
}

export default Pagination;
