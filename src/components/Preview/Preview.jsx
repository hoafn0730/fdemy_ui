import classnames from 'classnames/bind';

import styles from './Preview.module.scss';
import IndexModule from '../IndexModule';
import { usePreview } from '~/contexts/previewContext';
import { closePreview } from '~/store/action/previewAction';
import VideoPlayer from '../VideoPlayer';

const cx = classnames.bind(styles);

function Preview() {
    const { dispatch } = usePreview();

    const handleClose = () => {
        dispatch(closePreview());
    };

    return (
        <div className={cx('wrapper')} onClick={handleClose}>
            <IndexModule className={cx('grid', 'wide')} style={{ maxWidth: '1100px' }}>
                <IndexModule className={cx('row')}>
                    <IndexModule className={cx('col', 'l-10', 'l-o-1')}>
                        <div className={cx('body')} onClick={(e) => e.stopPropagation()}>
                            <div className="closeBtn">×</div>
                            <h3 style={{ color: '#000' }}>Giới thiệu khóa học</h3>
                            <h2 style={{ color: '#000' }}>Lập Trình JavaScript Cơ Bản</h2>
                            <VideoPlayer
                                data={{
                                    title: 'Xây Dựng UI Phần Header Dự Án Tiktok #1 | Thực Hành ReactJS Tại F8',
                                    video: 'hFK4okw-XYs',
                                }}
                            />
                        </div>
                    </IndexModule>
                </IndexModule>
            </IndexModule>
        </div>
    );
}

export default Preview;
