import classnames from 'classnames/bind';

import styles from './CourseItem.module.scss';
import CommonItem from '../CommonItem';
import { Link } from 'react-router-dom';
import Image from '../Image';
import Button from '../Button';

const cx = classnames.bind(styles);

function CourseItem({ title, desc, linkTo, image, ctaTitle, oldPrice, mainPrice, isDetail }) {
    return (
        <>
            {isDetail ? (
                <div className={cx('wrapper')}>
                    <div className={cx('inner')}>
                        <div className={cx('thumb')}>
                            <Link to={linkTo}>
                                <Image src={image} alt={title} />
                            </Link>
                        </div>
                        <div className={cx('info')}>
                            <h2 className={cx('title')}>
                                <Link>
                                    {title}
                                    <span className={cx('free-title')}>Miễn phí</span>
                                </Link>
                            </h2>
                            {mainPrice && <div className={cx('price')}>mainPrice</div>}
                            {desc && <p className={cx('desc')}>{desc}</p>}
                            <Button primary rounded className={cx('detail-btn')}>
                                View Course
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                <CommonItem
                    title={title}
                    linkTo={linkTo}
                    image={image}
                    ctaTitle={ctaTitle}
                    additional={
                        <div className={cx('price')}>
                            <span className={cx('old-price')}>{oldPrice}đ</span>
                            <span className={cx('main-price')}>{mainPrice}đ</span>
                        </div>
                    }
                />
            )}
        </>
    );
}

export default CourseItem;
