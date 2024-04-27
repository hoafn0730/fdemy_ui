import classnames from 'classnames/bind';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';

import styles from './Preview.module.scss';
import IndexModule from '../IndexModule';
import VideoPlayer from '../VideoPlayer';
import usePreview from '~/hooks/usePreview';
import { closePreview } from '~/store/actions/previewAction';

const cx = classnames.bind(styles);

function Preview() {
    const { dispatch } = usePreview();
    const div = document.createElement('div');

    useEffect(() => {
        document.body.appendChild(div);

        return () => {
            document.body.removeChild(div);
        };
    }, []);

    const handleClose = () => {
        dispatch(closePreview());
    };

    return ReactDOM.createPortal(
        <div className={cx('wrapper')} onClick={handleClose}>
            <IndexModule className={cx('grid', 'wide')} style={{ maxWidth: '1100px' }}>
                <IndexModule className={cx('row')}>
                    <IndexModule className={cx('col', 'l-10', 'l-o-1')}>
                        <div className={cx('body')} onClick={(e) => e.stopPropagation()}>
                            <h3>Giới thiệu khóa học</h3>
                            <h2>Lập Trình JavaScript Cơ Bản</h2>
                            <div className={cx('closeBtn')} onClick={handleClose}>
                                ×
                            </div>
                            <div className={cx('content')}>
                                <VideoPlayer
                                    title="Xây Dựng UI Phần Header Dự Án Tiktok #1 | Thực Hành ReactJS Tại F8"
                                    video="hFK4okw-XYs"
                                    type="youtube"
                                />
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
