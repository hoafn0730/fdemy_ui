import * as authService from '~/services/authService';
import { USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from '../constants';

const doLogin = ({ dispatch, data }) => {
    dispatch({ type: USER_LOGIN_REQUEST });

    authService
        .login(data)
        .then((res) => {
            if (res.code === 0) {
                dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
                window.location.reload();
            } else {
                dispatch({ type: USER_LOGIN_FAILED, error: res.message });
            }
        })
        .catch((err) => {
            dispatch({ type: USER_LOGIN_FAILED });
        });
};

const doLogout = ({ dispatch }) => {
    authService
        .logout()
        .then((res) => {
            if (res.code === 0) {
                dispatch({ type: USER_LOGOUT });
            }
        })
        .catch((err) => {
            dispatch({ type: USER_LOGIN_FAILED });
        });
    return;
};

const doGetAccount = ({ dispatch }) => {
    dispatch({ type: USER_LOGIN_REQUEST });

    authService
        .getCurrentUser()
        .then((res) => {
            if (res.code === 0) {
                dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
            } else {
                dispatch({ type: USER_LOGIN_FAILED });
            }
        })
        .catch((err) => {
            dispatch({ type: USER_LOGIN_FAILED });
        });
};

const clearAccount = () => {
    return { type: USER_LOGOUT };
};

export { doLogin, doLogout, doGetAccount, clearAccount };
