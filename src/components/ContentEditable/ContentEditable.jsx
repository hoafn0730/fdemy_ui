import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './ContentEditable.module.scss';
import { forwardRef } from 'react';

const cx = classnames.bind(styles);

function ContentEditable({ className, onChange }, ref) {
    return (
        <div
            ref={ref}
            spellCheck="false"
            data-empty-text="Tiêu đề"
            contentEditable
            className={cx('wrapper', {
                [className]: className,
            })}
            onInput={onChange}
        />
    );
}

ContentEditable.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.string.isRequired,
};

export default forwardRef(ContentEditable);
