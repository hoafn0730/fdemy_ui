import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Search.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';

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
