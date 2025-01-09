import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { DotLoader } from 'react-spinners';

import styles from './Home.module.scss';
import IndexModule from '~/components/IndexModule';
import Slideshow from '~/pages/Home/Slideshow';
import ScrollList from '~/components/ScrollList';
import CourseItem from '~/components/CourseItem';
import * as courseService from '~/services/courseService';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classnames.bind(styles);

function Home() {
    const [courses, setCourses] = useState();
    const [loading, setLoading] = useState(true);

    const override = {
        display: 'block',
        margin: '0 auto',
        textAlign: 'center',
    };

    const fetchApi = () => {
        courseService
            .getCourses()
            .then((res) => {
                setCourses(res);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <IndexModule className={cx('grid')}>
            {loading && (
                <div style={{ height: '90vh', display: 'flex', alignItems: 'center' }}>
                    <DotLoader
                        color={'#38d6b7'}
                        loading={loading}
                        cssOverride={override}
                        size={100}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            )}

            {!loading && (
                <>
                    <div className={cx('slideshow')}>
                        <Slideshow />
                    </div>
                    <div className={cx('wrapper')}>
                        <ScrollList
                            title={'Khóa học Pro'}
                            label="Mới"
                            action={
                                <Button text className={cx('action-btn')}>
                                    <span>Xem thêm</span>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </Button>
                            }
                            render={() =>
                                courses &&
                                courses?.proCourses.map(({ title, image, ctaTitle, oldPrice, price, slug }, idx) => (
                                    <CourseItem
                                        key={idx}
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
                            action={
                                <Button text className={cx('action-btn')}>
                                    <span>Xem thêm</span>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </Button>
                            }
                            render={() =>
                                courses &&
                                courses?.freeCourses.map(
                                    ({ title, image, ctaTitle, oldPrice, mainPrice, slug }, idx) => (
                                        <CourseItem
                                            key={idx}
                                            title={title}
                                            linkTo={'/courses/' + slug}
                                            image={image}
                                            ctaTitle={ctaTitle}
                                            oldPrice={oldPrice}
                                            mainPrice={mainPrice}
                                        />
                                    ),
                                )
                            }
                        />
                    </div>
                </>
            )}
        </IndexModule>
    );
}

export default Home;
