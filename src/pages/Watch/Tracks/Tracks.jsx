import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './Tracks.module.scss';
import TrackItem from './TrackItem';

const cx = classnames.bind(styles);

function Tracks({ steps, process, onChangeShow }) {
    console.log('🚀 ~ Tracks ~ process:', process);
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
                    {!!steps?.length &&
                        steps.map((item, index) => {
                            const isCheckExist = process.includes(item.id);

                            return (
                                <TrackItem
                                    key={index}
                                    title={item.title}
                                    uuid={item.uuid}
                                    image={
                                        item?.lesson?.videoType === 'youtube'
                                            ? `https://img.youtube.com/vi/${item?.lesson?.video}/sddefault.jpg`
                                            : item?.lesson?.image
                                    }
                                    index={index + 1}
                                    disabled={!isCheckExist}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

Tracks.propTypes = {
    onChangeShow: PropTypes.func.isRequired,
};

export default Tracks;
