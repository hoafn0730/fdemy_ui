import { actions } from '~/store/action/themeAction';

const initialState = {
    isDarkMode: false,
};

const themeReducer = (state, action) => {
    switch (action.type) {
        case actions.CHANGE_THEME: {
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
