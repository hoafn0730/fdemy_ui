import classnames from 'classnames/bind';
import { useState } from 'react';

import styles from './Watch.module.scss';
import Header from './Header';
import Video from './Video';
import Tracks from './Tracks';
import ActionBar from '~/components/ActionBar';

const cx = classnames.bind(styles);

function Watch() {
    const [isShowTracks, setIsShowTracks] = useState(true);

    const handleShowTracks = () => {
        setIsShowTracks((prev) => !prev);
    };

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>
                <Video />
                {isShowTracks && <Tracks onChangeShow={handleShowTracks} />}
            </div>
            <ActionBar isShowTracks={isShowTracks} onChangeShow={handleShowTracks} />
        </div>
    );
}

export default Watch;
