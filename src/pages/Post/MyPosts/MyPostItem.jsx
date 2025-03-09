import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './MyPosts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { formatDistanceToNow } from 'date-fns';
import { vi } from 'date-fns/locale';

const cx = classnames.bind(styles);

function MyPostItem({ post }) {
    return (
        <div className={cx('item')}>
            <h3 className={cx('title')}>
                <Link to={'/'}>{post.title}</Link>
            </h3>
            <div className={cx('author')}>
                <Link to={'/'}>
                    Chỉnh sửa{' '}
                    {formatDistanceToNow(new Date(post.updatedAt || new Date()), {
                        addSuffix: true,
                        includeSeconds: true,
                        locale: vi,
                    })}
                </Link>
            </div>
            {/* options */}
            <div className={cx('more')}>
                <FontAwesomeIcon icon={faEllipsis} />
            </div>
        </div>
    );
}

export default MyPostItem;
