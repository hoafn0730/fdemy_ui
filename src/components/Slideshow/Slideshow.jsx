import classnames from 'classnames/bind';
import Slider from 'react-slick';

import styles from './Slideshow.module.scss';
import SlideItem from './SlideItem';
import { NextArrow, PrevArrow } from './Arrows';

const cx = classnames.bind(styles);

const BANNER_ITEMS = [
    {
        title: 'Học ReactJS Miễn Phí!',
        desc: 'Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.',
        linkTo: '/',
        ctaTitle: 'ĐĂNG KÝ NGAY',
        image: 'https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png',
    },
    {
        title: 'Học ReactJS Miễn Phí!',
        desc: 'Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.',
        linkTo: '/',
        ctaTitle: 'ĐĂNG KÝ NGAY',
        image: 'https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png',
    },
];

function Slideshow() {
    const settings = {
        dots: true,
        infinite: true,
        // autoplay: true,
        speed: 800,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: (dots) => <ul>{dots}</ul>,
        customPaging: (i) => <button>{i + 1}</button>,
    };

    return (
        <div className={cx('wrapper')}>
            <Slider {...settings}>
                {BANNER_ITEMS.map((item) => (
                    <SlideItem
                        title={item.title}
                        desc={item.desc}
                        linkTo={item.linkTo}
                        ctaTitle={item.ctaTitle}
                        image={item.image}
                    />
                ))}
            </Slider>
        </div>
    );
}

export default Slideshow;
