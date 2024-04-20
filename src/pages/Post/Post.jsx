import classnames from 'classnames/bind';

import styles from './Post.module.scss';
import IndexModule from '~/components/IndexModule';
import { Outlet, useLocation } from 'react-router-dom';
import Heading from '~/components/Heading';
import HeadingTabs from '~/components/HeadingTabs';
import { useEffect, useState } from 'react';

const cx = classnames.bind(styles);

const tabs = [
    { title: 'Drafts', to: 'drafts' },
    { title: 'Published', to: 'published' },
];

function Post() {
    const location = useLocation();
    const [tab, setTab] = useState();

    useEffect(() => {
        const currentRoute = location.pathname.split('/')[location.pathname.split('/').length - 1];
        setTab(currentRoute);
    }, [location.pathname]);
    //
    return (
        <div className={cx('wrapper')}>
            <IndexModule className={cx('grid')}>
                <IndexModule className={cx('row')}>
                    <IndexModule className={cx('col', 'l-8')}>
                        <Heading title="Bài viết của tôi" />
                        <HeadingTabs tabs={tabs} />
                        <Outlet context={{ tab }} />
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
