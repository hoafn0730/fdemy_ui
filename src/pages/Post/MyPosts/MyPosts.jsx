import classnames from 'classnames/bind';
import { Navigate, useLocation } from 'react-router-dom';

import styles from './MyPosts.module.scss';
import MyPostItem from './MyPostItem';

const cx = classnames.bind(styles);

function MyPosts() {
    const location = useLocation();
    const currentRoute = location.pathname.split('/')[location.pathname.split('/').length - 1];

    return (
        <div className={cx('wrapper')}>
            {currentRoute === 'drafts' ? (
                <MyPostItem />
            ) : currentRoute === 'published' ? (
                <div className={cx('noResult')}>
                    <p>Chưa có xuất bản nào.</p>
                    <p>
                        Bạn có thể <a href="/new-post">viết bài mới</a> hoặc <a href="/blogs">đọc bài viết</a> khác trên
                        F8 nhé.
                    </p>
                </div>
            ) : (
                <Navigate to={'/not-found'} />
            )}
        </div>
    );
}

export default MyPosts;
