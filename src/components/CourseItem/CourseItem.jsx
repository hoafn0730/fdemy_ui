import classnames from 'classnames/bind';

import styles from './CourseItem.module.scss';
import CommonItem from '../CommonItem';

const cx = classnames.bind(styles);

function CourseItem({ title, linkTo, image, ctaTitle, oldPrice, mainPrice }) {
    return (
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
    );
}

export default CourseItem;
