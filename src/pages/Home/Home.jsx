import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Home.module.scss';
import IndexModule from '~/components/IndexModule';
import Slideshow from '~/components/Slideshow';
import ScrollList from '~/components/ScrollList';
import CourseItem from '~/components/CourseItem';
import * as courseService from '~/services/courseService';

const cx = classnames.bind(styles);

function Home() {
    const [courses, setCourses] = useState();

    const fetchApi = () => {
        courseService
            .getCourses()
            .then((res) => {
                setCourses(res);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <IndexModule className={cx('grid', 'wide')}>
            <div className={cx('slideshow')}>
                <Slideshow />
            </div>
            <div className={cx('wrapper')}>
                <ScrollList
                    title={'Khóa học Pro'}
                    render={() =>
                        courses &&
                        courses?.proCourses.map(({ title, image, ctaTitle, oldPrice, price, slug }, index) => (
                            <CourseItem
                                key={index}
                                title={title}
                                linkTo={'/courses/' + slug}
                                image={image}
                                ctaTitle={ctaTitle}
                                oldPrice={oldPrice}
                                mainPrice={price}
                            />
                        ))
                    }
                />
                <ScrollList
                    title={'Khóa học Free'}
                    subTitle={'386.894+ người khác đã học'}
                    render={() =>
                        courses &&
                        courses?.freeCourses.map(({ title, image, ctaTitle, oldPrice, mainPrice, slug }, index) => (
                            <CourseItem
                                key={index}
                                title={title}
                                linkTo={'/courses/' + slug}
                                image={image}
                                ctaTitle={ctaTitle}
                                oldPrice={oldPrice}
                                mainPrice={mainPrice}
                            />
                        ))
                    }
                />
            </div>
        </IndexModule>
    );
}

export default Home;
