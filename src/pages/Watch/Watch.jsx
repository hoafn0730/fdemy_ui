import classnames from 'classnames/bind';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-regular-svg-icons';

import styles from './Watch.module.scss';
import Header from './Header';
import Video from './Video';
import Tracks from './Tracks';
import ActionBar from '~/components/ActionBar';
import Button from '~/components/Button';
import Modal from '~/components/Modal';
import Comment from '~/components/Comment';
import useModal from '~/hooks/useModal';
import { openModal } from '~/store/actions/modalAction';

const cx = classnames.bind(styles);

function Watch() {
    const [isShowTracks, setIsShowTracks] = useState(true);
    const [isShowComments, setIsShowComments] = useState(false);
    const { dispatch } = useModal();

    const handleShowTracks = () => {
        setIsShowTracks((prev) => !prev);
    };

    const handleShowComments = () => {
        if (!isShowComments) {
            setIsShowComments(true);
        } else {
            dispatch(openModal());
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>
                <Video />
                {isShowTracks && <Tracks onChangeShow={handleShowTracks} />}
            </div>
            <ActionBar isShowTracks={isShowTracks} onChangeShow={handleShowTracks} />
            <Button
                rounded
                className={cx('commentBtn')}
                leftIcon={<FontAwesomeIcon icon={faComments} />}
                onClick={handleShowComments}
            >
                Hỏi đáp
            </Button>
            {isShowComments && (
                <Modal>
                    <Comment />
                </Modal>
            )}
        </div>
    );
}

export default Watch;
