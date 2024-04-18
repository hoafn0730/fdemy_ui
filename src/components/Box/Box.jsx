import classnames from 'classnames/bind';

import styles from './Box.module.scss';

const cx = classnames.bind(styles);

function Box({ title, children, className }) {
    return (
        <div
            className={cx('wrapper', {
                [className]: className,
            })}
        >
            <h4 className={cx('title')}>{title}</h4>
            {children}
        </div>
    );
}

export default Box;
