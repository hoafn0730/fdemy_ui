import classnames from 'classnames/bind';

import styles from './CourseItem.module.scss';
import Image from '../Image';
import images from '~/assets/images';

const cx = classnames.bind(styles);

function CourseItem() {
    return (
        <div>
            course
            <Image className={cx('avatar')} src={images.avatar} />
        </div>
    );
}

export default CourseItem;
