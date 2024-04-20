import classnames from 'classnames/bind';
import { useOutletContext } from 'react-router-dom';

import styles from './Setting.module.scss';
import IndexModule from '~/components/IndexModule';
import FieldGroup from '~/components/FieldGroup';
import Field from '~/components/Field';
import InputField from '~/components/InputField';
import PhotoField from '~/components/PhotoField';
import { useState } from 'react';

const cx = classnames.bind(styles);

function SettingPage() {
    const { page } = useOutletContext();
    const [value, setValue] = useState('');

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className={cx('page')}>
            <IndexModule className={cx('row')}>
                <IndexModule className={cx('col', 'l-12')}>
                    {page === 'personal' ? (
                        <FieldGroup title={'Thông tin cá nhân'}>
                            <Field>
                                <InputField
                                    value={value}
                                    label={'Họ tên'}
                                    name={'fullName'}
                                    placeholder={'Họ tên'}
                                    desc={'Tên của bạn xuất hiện trên trang cá nhân và bên cạnh các bình luận của bạn.'}
                                    onChange={handleInput}
                                />
                            </Field>
                            <Field>
                                <PhotoField
                                    label={'Avatar'}
                                    name={'fullName'}
                                    value={'http://localhost:3000/static/media/avatar.629fae61566dbce528a0.jpg'}
                                    placeholder={'Họ tên'}
                                    desc={'Nên là ảnh vuông, chấp nhận các tệp: JPG, PNG hoặc GIF.'}
                                />
                            </Field>
                        </FieldGroup>
                    ) : (
                        page === 'security' && <h2>Security</h2>
                    )}
                </IndexModule>
            </IndexModule>
        </div>
    );
}

export default SettingPage;
