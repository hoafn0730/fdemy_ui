import classnames from 'classnames/bind';

import styles from './Category.module.scss';
import { Link } from 'react-router-dom';

const cx = classnames.bind(styles);

function CategoryItem() {
    return (
        <div className={cx('item')}>
            <Link to="/" className={cx('link')}>
                CategoryItem
            </Link>
        </div>
    );
}

export default CategoryItem;
