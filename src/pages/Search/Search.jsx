import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import styles from './Search.module.scss';
import Heading from '~/components/Heading';
import IndexModule from '~/components/IndexModule';
import CourseItem from '~/components/CourseItem';
import Pagination from '~/components/Pagination';
import { search } from '~/services/searchService';

const cx = classnames.bind(styles);

function Search() {
    const [searchParams] = useSearchParams();
    const { q: query, page } = Object.fromEntries([...searchParams]);
    const [searchResult, setSearchResult] = useState({});

    useEffect(() => {
        search(query, 'more', page || 1).then((res) => setSearchResult(res));
    }, [page, query]);

    return (
        <div className={cx('wrapper')}>
            <IndexModule className={cx('grid')}>
                <IndexModule className={cx('row')}>
                    <IndexModule className={cx('col', 'l-8', 'l-o-2')}>
                        <Heading title={(searchResult?.meta?.count ?? 0) + ` kết quả  “${query}”`} />
                        <div className={cx('list-result')}>
                            {searchResult?.data?.map((item, index) => (
                                <CourseItem
                                    key={index}
                                    title={item.title}
                                    desc={item.desc}
                                    linkTo={`/courses/${item.slug}`}
                                    image={item.image}
                                    isDetail
                                />
                            ))}

                            <Pagination total={searchResult?.meta?.count} />
                        </div>
                    </IndexModule>
                </IndexModule>
            </IndexModule>
        </div>
    );
}

export default Search;
