import classnames from 'classnames/bind';

import styles from '../Search.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';
import { Link } from 'react-router-dom';

const cx = classnames.bind(styles);

function SearchItem() {
    return (
        <Link to={'/'} className={cx('searchItem')}>
            <Image className={cx('avatar')} src={images.avatar} />
            <span>course</span>
        </Link>
    );
}

export default SearchItem;
