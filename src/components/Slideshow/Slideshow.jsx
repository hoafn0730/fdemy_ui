import classnames from 'classnames/bind';
import Slider from 'react-slick';

import styles from './Slideshow.module.scss';
import SlideItem from './SlideItem';
import { NextArrow, PrevArrow } from './Arrows';

const cx = classnames.bind(styles);

const { BANNER_ITEMS } = require('~/data.json');

function Slideshow() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
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
                {BANNER_ITEMS.map((item, index) => {
                    return (
                        <SlideItem
                            key={index}
                            title={item.title}
                            desc={item.desc}
                            linkTo={item.linkTo}
                            ctaTitle={item.ctaTitle}
                            image={item.image}
                            styles={{ ...item.style }}
                        />
                    );
                })}
            </Slider>
        </div>
    );
}

export default Slideshow;
