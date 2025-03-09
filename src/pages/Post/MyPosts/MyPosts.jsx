import classnames from 'classnames/bind';
import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './MyPosts.module.scss';
import MyPostItem from './MyPostItem';
import { getBlogs } from '~/services/blogService';

const cx = classnames.bind(styles);

function MyPosts() {
    const { tab } = useOutletContext();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getBlogs().then((res) => setPosts(res.data));

        // eslint-disable-next-line
    }, []);

    return (
        <div className={cx('wrapper')}>
            {tab === 'drafts' ? (
                <>
                    {posts.map((post) => (
                        <MyPostItem post={post} />
                    ))}
                </>
            ) : (
                tab === 'published' && (
                    <div className={cx('noResult')}>
                        <p>Chưa có xuất bản nào.</p>
                        <p>
                            Bạn có thể <a href="/new-post">viết bài mới</a> hoặc <a href="/blogs">đọc bài viết</a> khác
                            trên F8 nhé.
                        </p>
                    </div>
                )
            )}
        </div>
    );
}

export default MyPosts;
