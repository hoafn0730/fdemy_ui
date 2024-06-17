import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './InputField.module.scss';
import Button from '../Button';
import useAccount from '~/hooks/useAccount';
import { updateProfile } from '~/services/authService';

const cx = classnames.bind(styles);

function InputField({ label, name, type = 'text', placeholder, desc }) {
    const {
        state: { userInfo },
    } = useAccount();

    const [isEdit, setIsEdit] = useState(false);
    const [value, setValue] = useState('');

    useEffect(() => {
        setValue(userInfo?.fullName);
    }, [userInfo]);

    const handleEdit = () => {
        setIsEdit(true);
    };

    const handleSave = () => {
        updateProfile({ fullName: value }).catch((err) => console.log(err));
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
                    onChange={(e) => setValue(e.target.value)}
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
