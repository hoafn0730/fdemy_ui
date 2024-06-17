import classnames from 'classnames/bind';

import styles from './AuthModal.module.scss';
import useAuthModal from '~/hooks/useAuthModal';
import { closeAuthModal, closingAuthModal } from '~/store/actions/authModalAction';

const cx = classnames.bind(styles);

function AuthModal({ children }) {
    const { state, dispatch } = useAuthModal();

    const handleCloseAuthModal = () => {
        dispatch(closingAuthModal());
        setTimeout(() => {
            dispatch(closeAuthModal());
        }, 300);
    };

    return (
        <div
            className={cx('wrapper', {
                closing: state.isClosing,
            })}
        >
            <div className={cx('overlay')} onClick={handleCloseAuthModal}></div>
            <div className={cx('content')}>
                <button className={cx('close')} onClick={handleCloseAuthModal}>
                    <span>×</span>
                </button>
                <div className={cx('iframe')}>{children}</div>
                {/* <iframe src="http://localhost:5173/login" className={cx('iframe')} frameborder="0"></iframe> */}
            </div>
        </div>
    );
}

export default AuthModal;
