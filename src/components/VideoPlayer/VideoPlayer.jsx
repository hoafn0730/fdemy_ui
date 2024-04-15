import classnames from 'classnames/bind';

import styles from './VideoPlayer.module.scss';

const cx = classnames.bind(styles);

function VideoPlayer({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('player')}>
                {/* <div className={cx('preview')}>
                    <div className={cx('shadow')}></div>
                </div> */}
                <iframe
                    frameBorder={0}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title={data.title}
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${data.video}?autoplay=1&mute=0&controls=1&origin=https%3A%2F%2Ffullstack.edu.vn&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1`}
                    id="widget2"
                />
            </div>
        </div>
    );
}

export default VideoPlayer;
