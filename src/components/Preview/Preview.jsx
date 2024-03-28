import classnames from 'classnames/bind';

import styles from './Preview.module.scss';
import IndexModule from '../IndexModule';
import { usePreview } from '~/contexts/previewContext';
import { closePreview } from '~/store/action/previewAction';

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
                            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                                <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                                    <div style={{ width: '100%', height: '100%' }}>
                                        <iframe
                                            frameborder="0"
                                            allowfullscreen=""
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            title="Javascript có thể làm được gì? Giới thiệu về trang F8 | Học lập trình Javascript cơ bản"
                                            width="100%"
                                            height="100%"
                                            src="https://www.youtube.com/embed/0SJE9dYdpps?autoplay=1&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Ffullstack.edu.vn&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=7"
                                            id="widget8"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </IndexModule>
                </IndexModule>
            </IndexModule>
        </div>
    );
}

export default Preview;
