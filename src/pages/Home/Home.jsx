import classnames from 'classnames/bind';

import styles from './Home.module.scss';
import IndexModule from '~/components/index-module';
import Slideshow from '~/components/Slideshow';
import ScrollList from '~/components/ScrollList';
import CourseItem from '~/components/CourseItem';

const cx = classnames.bind(styles);

const listCourses = [
    {
        title: 'Khóa học Pro',
        data: [
            {
                title: 'HTML CSS Pro',
                linkTo: '/',
                image: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
                ctaTitle: 'Xem khoá học',
                oldPrice: '2.500.000',
                mainPrice: '1.299.000',
            },
            {
                title: 'HTML CSS Pro',
                linkTo: '/',
                image: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
                ctaTitle: 'Xem khoá học',
                oldPrice: '2.500.000',
                mainPrice: '1.299.000',
            },
            {
                title: 'HTML CSS Pro',
                linkTo: '/',
                image: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
                ctaTitle: 'Xem khoá học',
                oldPrice: '2.500.000',
                mainPrice: '1.299.000',
            },
            {
                title: 'HTML CSS Pro',
                linkTo: '/',
                image: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
                ctaTitle: 'Xem khoá học',
                oldPrice: '2.500.000',
                mainPrice: '1.299.000',
            },
            {
                title: 'HTML CSS Pro',
                linkTo: '/',
                image: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
                ctaTitle: 'Xem khoá học',
                oldPrice: '2.500.000',
                mainPrice: '1.299.000',
            },
        ],
    },
    {
        title: 'Khóa học Free',
        subTitle: '386.894+ người khác đã học',
        data: [
            {
                title: 'HTML CSS Pro',
                linkTo: '/',
                image: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
                ctaTitle: 'Xem khoá học',
                oldPrice: '2.500.000',
                mainPrice: '1.299.000',
            },
            {
                title: 'HTML CSS Pro',
                linkTo: '/',
                image: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
                ctaTitle: 'Xem khoá học',
                oldPrice: '2.500.000',
                mainPrice: '1.299.000',
            },
            {
                title: 'HTML CSS Pro',
                linkTo: '/',
                image: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
                ctaTitle: 'Xem khoá học',
                oldPrice: '2.500.000',
                mainPrice: '1.299.000',
            },
            {
                title: 'HTML CSS Pro',
                linkTo: '/',
                image: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
                ctaTitle: 'Xem khoá học',
                oldPrice: '2.500.000',
                mainPrice: '1.299.000',
            },
            {
                title: 'HTML CSS Pro',
                linkTo: '/',
                image: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
                ctaTitle: 'Xem khoá học',
                oldPrice: '2.500.000',
                mainPrice: '1.299.000',
            },
        ],
    },
    {
        title: 'Bài viết nổi bật',
        data: [
            {
                title: 'HTML CSS Pro',
                linkTo: '/',
                image: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
                ctaTitle: 'Xem khoá học',
                oldPrice: '2.500.000',
                mainPrice: '1.299.000',
            },
            {
                title: 'HTML CSS Pro',
                linkTo: '/',
                image: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
                ctaTitle: 'Xem khoá học',
                oldPrice: '2.500.000',
                mainPrice: '1.299.000',
            },
            {
                title: 'HTML CSS Pro',
                linkTo: '/',
                image: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
                ctaTitle: 'Xem khoá học',
                oldPrice: '2.500.000',
                mainPrice: '1.299.000',
            },
            {
                title: 'HTML CSS Pro',
                linkTo: '/',
                image: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
                ctaTitle: 'Xem khoá học',
                oldPrice: '2.500.000',
                mainPrice: '1.299.000',
            },
            {
                title: 'HTML CSS Pro',
                linkTo: '/',
                image: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
                ctaTitle: 'Xem khoá học',
                oldPrice: '2.500.000',
                mainPrice: '1.299.000',
            },
        ],
    },
];

function Home() {
    return (
        <IndexModule className={cx('grid', 'wide')}>
            <div className={cx('slideshow')}>
                <Slideshow />
            </div>
            <div className={cx('wrapper')}>
                {listCourses.map((item, index) => (
                    <ScrollList
                        key={index}
                        title={item.title}
                        subTitle={item.subTitle}
                        render={() =>
                            item.data.map(({ title, linkTo, image, ctaTitle, oldPrice, mainPrice }, index) => (
                                <CourseItem
                                    key={index}
                                    title={title}
                                    linkTo={linkTo}
                                    image={image}
                                    ctaTitle={ctaTitle}
                                    oldPrice={oldPrice}
                                    mainPrice={mainPrice}
                                />
                            ))
                        }
                    />
                ))}
            </div>
        </IndexModule>
    );
}

export default Home;
