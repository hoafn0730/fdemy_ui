import { CHANGE_THEME } from '../constants';

const initialState = {
    isDarkMode: false,
};

const themeReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_THEME: {
            return {
                ...state,
                isDarkMode: action.isDarkMode,
            };
        }

        default:
            return state;
    }
};

export { themeReducer, initialState };
