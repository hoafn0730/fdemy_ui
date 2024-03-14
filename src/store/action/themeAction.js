const actions = {
    CHANGE_THEME: 'CHANGE_THEME',
};

const changeTheme = (isDarkMode) => {
    return { type: actions.CHANGE_THEME, isDarkMode };
};

export { actions, changeTheme };
