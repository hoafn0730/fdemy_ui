import classnames from 'classnames/bind';

import styles from './Post.module.scss';
import IndexModule from '~/components/IndexModule';
import { Outlet } from 'react-router-dom';
import Heading from '~/components/Heading';
import HeadingTabs from '~/components/HeadingTabs';

const cx = classnames.bind(styles);

function Post() {
    const tabs = [
        { title: 'Drafts', to: 'drafts' },
        { title: 'Published', to: 'published' },
    ];

    return (
        <div className={cx('wrapper')}>
            <IndexModule className={cx('grid')}>
                <IndexModule className={cx('row')}>
                    <IndexModule className={cx('col', 'l-8')}>
                        <Heading title="Bài viết của tôi" />
                        <HeadingTabs tabs={tabs} />
                        <Outlet />
                    </IndexModule>
                    <IndexModule className={cx('col', 'l-4')}>
                        <></>
                    </IndexModule>
                </IndexModule>
            </IndexModule>
        </div>
    );
}

export default Post;
