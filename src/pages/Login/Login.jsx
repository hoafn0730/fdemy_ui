import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './Login.module.scss';
import FormGroup from '~/components/FormGroup';
import FormControl from '~/components/FormControl';
import FormLabel from '~/components/FormLabel';
import Button from '~/components/Button';
import config from '~/config';
import { clearAccount, doLogin } from '~/store/actions/accountAction';
import useAccount from '~/hooks/useAccount';

const cx = classnames.bind(styles);

function Login() {
    const {
        state: { error },
        dispatch,
    } = useAccount();
    const [isError, setIsError] = useState(false);
    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        if (formValue.email && formValue.password) {
            if (error) {
                setIsError(true);
            }
        } else {
            setIsError(false);
        }
    }, [formValue, error]);

    const handleChangeFormValue = (e) => {
        setFormValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmitLogin = () => {
        doLogin({ dispatch, data: formValue });
    };

    const handleFocusInput = () => {
        if (!!error) {
            dispatch(clearAccount());
            setIsError(false);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('header')}>
                        <Link to={config.routes.home} className={cx('logo')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faCode} />
                        </Link>
                        <h1 className={cx('title')}>Login in CodeLearn</h1>
                        <p className={cx('desc')}>
                            Mỗi người nên sử dụng riêng một tài khoản, tài khoản nhiều người sử dụng chung có thể sẽ bị
                            khóa.
                        </p>
                    </div>
                    <div className={cx('body')}>
                        <div className={cx('formBody')}>
                            <FormGroup>
                                <FormLabel label={'Email'} />
                                <FormControl
                                    value={formValue.email}
                                    name={'email'}
                                    type={'email'}
                                    placeholder={'Email address'}
                                    invalid={isError}
                                    onFocus={handleFocusInput}
                                    onChange={handleChangeFormValue}
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormControl
                                    value={formValue.password}
                                    name={'password'}
                                    type={'password'}
                                    placeholder={'Password'}
                                    invalid={isError}
                                    onFocus={handleFocusInput}
                                    onChange={handleChangeFormValue}
                                />
                            </FormGroup>
                            {(formValue.password || formValue.email) && isError && (
                                <p className={cx('feedback')}>{error}</p>
                            )}
                            <Button
                                rounded
                                disabled={!formValue?.email || !formValue.password}
                                className={cx('submitBtn')}
                                onClick={handleSubmitLogin}
                            >
                                Login
                            </Button>
                        </div>
                        <p className={cx('dontHaveAcc')}>
                            Bạn chưa có tài khoản? <a href="/register">Đăng ký</a>
                        </p>
                        <p className={cx('forgotPassword')}>Quên mật khẩu?</p>
                        <div className={cx('acceptTerm')}>
                            Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với{' '}
                            <a href="https://fullstack.edu.vn/terms" target="_top">
                                điều khoản sử dụng
                            </a>
                            của chúng tôi.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
