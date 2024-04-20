import classnames from 'classnames/bind';
import { useState } from 'react';

import styles from './InputField.module.scss';
import Button from '../Button';

const cx = classnames.bind(styles);

function InputField({ label, name, value, type = 'text', placeholder, desc, onChange }) {
    const [isEdit, setIsEdit] = useState(false);

    const handleEdit = () => {
        setIsEdit(true);
    };

    const handleSave = () => {
        setIsEdit(false);
    };

    const handleCancel = () => {
        setIsEdit(false);
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <label className={cx('label')}>{label}</label>
                <input
                    value={value}
                    name={name}
                    type={type}
                    className={cx('control')}
                    placeholder={placeholder}
                    disabled={!isEdit}
                    onChange={onChange}
                />
                <p className={cx('desc')}>{desc}</p>
            </div>
            {!isEdit && (
                <Button outline rounded fieldBtn onClick={handleEdit}>
                    Edit
                </Button>
            )}

            {isEdit && (
                <div className={cx('editMode')}>
                    <Button outline rounded fieldBtn saveFieldBtn onClick={handleSave}>
                        Save
                    </Button>
                    <Button outline rounded fieldBtn onClick={handleCancel}>
                        Cancel
                    </Button>
                </div>
            )}
        </>
    );
}

export default InputField;
