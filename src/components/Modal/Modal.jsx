import classnames from 'classnames/bind';

import styles from './Modal.module.scss';

const cx = classnames.bind(styles);

function Modal({ children, size = '540px', open, onClose }) {
    return (
        open && (
            <div
                className={cx('wrapper', {
                    closing: !open,
                })}
            >
                <div className={cx('overlay')} onClick={onClose}></div>
                <div className={cx('content')} style={{ width: size }}>
                    <button className={cx('close')} onClick={onClose}>
                        <span>×</span>
                    </button>
                    <div className={cx('body', {})}>{children}</div>
                </div>
            </div>
        )
    );
}

export default Modal;
