import classnames from 'classnames/bind';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';

import styles from './Preview.module.scss';
import IndexModule from '../IndexModule';
import VideoPlayer from '../VideoPlayer';

const cx = classnames.bind(styles);

function Preview({ title, video, onClose }) {
    const div = document.createElement('div');

    useEffect(() => {
        document.body.appendChild(div);

        return () => {
            document.body.removeChild(div);
        };
    }, [div]);

    return ReactDOM.createPortal(
        <div className={cx('wrapper')} onClick={onClose}>
            <IndexModule className={cx('grid', 'wide')} style={{ maxWidth: '1100px' }}>
                <IndexModule className={cx('row')}>
                    <IndexModule className={cx('col', 'l-10', 'l-o-1')}>
                        <div className={cx('body')} onClick={(e) => e.stopPropagation()}>
                            <h3>Giới thiệu khóa học</h3>
                            <h2>{title}</h2>
                            <div className={cx('closeBtn')} onClick={onClose}>
                                ×
                            </div>
                            <div className={cx('content')}>
                                <VideoPlayer title={title} video={video} type="youtube" />
                            </div>
                        </div>
                    </IndexModule>
                </IndexModule>
            </IndexModule>
        </div>,
        div,
    );
}

export default Preview;
