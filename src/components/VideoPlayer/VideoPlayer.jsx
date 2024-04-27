import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

import styles from './VideoPlayer.module.scss';
import videos from '~/assets/videos';

const cx = classnames.bind(styles);

function VideoPlayer({ title, video, type }) {
    const [isPlay, setIsPlay] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const videoRef = useRef();

    const handlePlay = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setIsPlay(true);
        } else {
            video.pause();
            setIsPlay(false);
        }

        setShowButton(true);
        setTimeout(() => {
            setShowButton(false);
        }, 1380);
    };

    // https://www.youtube.com/embed/${video}?autoplay=1&mute=0&controls=1&origin=https%3A%2F%2Ffullstack.edu.vn&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1

    //
    const handleDblClick = () => {
        const video = videoRef.current;

        if (video) {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) {
                /* Firefox */
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) {
                /* Chrome, Safari and Opera */
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) {
                /* IE/Edge */
                video.msRequestFullscreen();
            }
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('player')} onClick={handlePlay} onDoubleClick={handleDblClick}>
                {type && type === 'youtube' ? (
                    <iframe
                        className={cx('video-steam')}
                        ref={videoRef}
                        frameBorder={0}
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title={title}
                        src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=0&controls=1&origin=https%3A%2F%2Ffullstack.edu.vn&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1`}
                    />
                ) : (
                    <>
                        <video className={cx('video-steam')} src={videos.giaNhu} ref={videoRef}></video>
                        {showButton && (
                            <div className={cx('shadow')}>
                                {isPlay ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

VideoPlayer.propTypes = {
    title: PropTypes.string,
    video: PropTypes.string.isRequired,
    type: PropTypes.string,
};

export default VideoPlayer;
