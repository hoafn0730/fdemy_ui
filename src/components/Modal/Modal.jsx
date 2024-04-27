import classnames from 'classnames/bind';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';

import styles from './Modal.module.scss';
import useModal from '~/hooks/useModal';
import { closeModal } from '~/store/actions/modalAction';

const cx = classnames.bind(styles);

function Modal({ children }) {
    const {
        state: { isOpen },
        dispatch,
    } = useModal();
    const div = document.createElement('div');

    useEffect(() => {
        document.body.appendChild(div);

        return () => {
            document.body.removeChild(div);
        };
    }, [isOpen]);

    const handleClose = () => {
        dispatch(closeModal());
    };

    return ReactDOM.createPortal(
        <div className={cx('wrapper', { closing: !isOpen })} onClick={handleClose}>
            <div className={cx('container')} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        div,
    );
}

export default Modal;
