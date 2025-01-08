import classnames from 'classnames/bind';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';

import styles from './Drawer.module.scss';

const cx = classnames.bind(styles);

function Drawer({ children, open, onClose }) {
    const div = document.createElement('div');

    useEffect(() => {
        document.body.appendChild(div);

        return () => {
            document.body.removeChild(div);
        };
    }, [div]);

    return ReactDOM.createPortal(
        <>
            {open && (
                <div className={cx('wrapper', { closing: !open })} onClick={onClose}>
                    <div className={cx('container')} onClick={(e) => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            )}
        </>,
        div,
    );
}

export default Drawer;
