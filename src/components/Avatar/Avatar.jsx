import classnames from 'classnames/bind';

import styles from './Avatar.module.scss';
import Image from '../Image';
import images from '~/assets/images';

const cx = classnames.bind(styles);

function Avatar({ src, alt, style }) {
    return (
        <div className={cx('wrapper')} style={style}>
            <Image className={cx('img')} src={src} alt={alt} fallback={images.fallbackUser} />
        </div>
    );
}

export default Avatar;
