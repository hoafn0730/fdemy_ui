import classnames from 'classnames/bind';

import styles from './Search.module.scss';
import Heading from '~/components/Heading';
import IndexModule from '~/components/IndexModule';
import CourseItem from '~/components/CourseItem';
import Pagination from '~/components/Pagination';

const cx = classnames.bind(styles);

function Search() {
    const data = [
        {
            title: 'Xây Dựng Website với ReactJS',
            desc: `Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa
            này trước nhé.`,
            image: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
            linkTo: '/',
        },
        {
            title: 'Xây Dựng Website với ReactJS',
            desc: `Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa
            này trước nhé.`,
            image: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
            linkTo: '/',
        },
        {
            title: 'Xây Dựng Website với ReactJS',
            desc: `Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa
            này trước nhé.`,
            image: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
            linkTo: '/',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <IndexModule className={cx('grid')}>
                <IndexModule className={cx('row')}>
                    <IndexModule className={cx('col', 'l-8', 'l-o-2')}>
                        <Heading title={3 + ' kết quả  “Frontend Development”'} />
                        <div className={cx('list-result')}>
                            {data.map((item, index) => (
                                <CourseItem
                                    key={index}
                                    title={item.title}
                                    desc={item.desc}
                                    linkTo={item.linkTo}
                                    image={item.image}
                                    isDetail
                                />
                            ))}

                            <Pagination />
                        </div>
                    </IndexModule>
                </IndexModule>
            </IndexModule>
        </div>
    );
}

export default Search;
