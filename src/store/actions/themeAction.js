import { CHANGE_THEME } from '../constants';

const changeTheme = (isDarkMode) => {
    return { type: CHANGE_THEME, isDarkMode };
};

export { changeTheme };
