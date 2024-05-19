import { USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from '../constants';

const initialState = {
    userInfo: {
        accessToken: '',
        refreshToken: '',
        email: '',
        username: '',
    },
    isLogin: false,
    isLoading: false,
    error: '',
};

const accountReducer = (state, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST: {
            return {
                ...state,
                userInfo: {},
                isLoading: true,
                error: '',
            };
        }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                userInfo: {
                    ...action.payload,
                },
                isLogin: true,
                isLoading: false,
                error: '',
            };

        case USER_LOGIN_FAILED:
            return {
                ...state,
                userInfo: {},
                isLoading: false,
                error: action.error,
            };

        case USER_LOGOUT:
            return {
                ...state,
                userInfo: {
                    accessToken: '',
                    refreshToken: '',
                    email: '',
                    username: '',
                },
                isLogin: false,
                isLoading: false,
                error: '',
            };

        default:
            return state;
    }
};

export { accountReducer, initialState };
