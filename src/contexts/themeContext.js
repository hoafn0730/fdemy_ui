import { createContext, useContext, useReducer } from 'react';

import { themeReducer, initialState } from '~/store/reducer/themeReducer';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    return (
        <ThemeContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

const useTheme = () => {
    return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };

export default ThemeContext;
