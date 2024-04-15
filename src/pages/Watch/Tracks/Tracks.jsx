import classnames from 'classnames/bind';

import styles from './Tracks.module.scss';
import TrackItem from './TrackItem';

const cx = classnames.bind(styles);

function Tracks({ onChangeShow }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')} id="learn-playlist">
                <header className={cx('header')}>
                    <h3 className={cx('heading')}>Nội dung khóa học</h3>
                    <button className={cx('btnClose')} onClick={onChangeShow}>
                        X
                    </button>
                </header>
                <div className={cx('body')}>
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <TrackItem
                            key={i}
                            title={'ReactJS là gì? Tại sao nên học ReactJS?'}
                            image={'https://i.ytimg.com/vi/z2f7RHgvddc/hq720.jpg'}
                            index={i}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tracks;
