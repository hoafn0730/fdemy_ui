import classnames from 'classnames/bind';

import styles from './Category.module.scss';
import { Link } from 'react-router-dom';

const cx = classnames.bind(styles);

function CategoryItem({ title, slug }) {
    return (
        <div className={cx('item')}>
            <Link to={'/road-map/' + slug} className={cx('link')}>
                {title}
            </Link>
        </div>
    );
}

export default CategoryItem;
