import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Slideshow.module.scss';
import Image from '../Image';
import Button from '../Button';

const cx = classnames.bind(styles);

function SlideItem({ title, desc, ctaTitle, linkTo, image }) {
    return (
        <div
            className={cx('item')}
            style={{
                '--cta-hover-color': '#2877FA',
                background: 'linear-gradient(to right, rgb(40, 119, 250), rgb(103, 23, 205))',
            }}
        >
            <div className={cx('left')}>
                <h2 className={cx('heading')}>
                    <Link to={linkTo}>{title}</Link>
                </h2>
                <p className={cx('desc')}>{desc}</p>
                <div>
                    <Button outline rounded className={cx('ctaBtn')}>
                        {ctaTitle}
                    </Button>
                </div>
            </div>
            <div className={cx('right')}>
                <Link to={linkTo}>
                    <Image className={cx('img')} src={image} alt="" />
                </Link>
            </div>
        </div>
    );
}

export default SlideItem;
