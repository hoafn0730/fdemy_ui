import classnames from 'classnames/bind';

import styles from './Home.module.scss';
import IndexModule from '~/components/IndexModule';
import Slideshow from '~/components/Slideshow';
import ScrollList from '~/components/ScrollList';
import CourseItem from '~/components/CourseItem';

const cx = classnames.bind(styles);

const { listCourses } = require('~/data.json');

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
                            item.data.map(({ title, linkTo, image, ctaTitle, oldPrice, mainPrice, slug }, index) => (
                                <CourseItem
                                    key={index}
                                    title={title}
                                    linkTo={linkTo + '/' + slug}
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
