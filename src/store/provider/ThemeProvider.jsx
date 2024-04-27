import { useReducer } from 'react';

import ThemeContext from '~/contexts/themeContext';
import { themeReducer, initialState } from '~/store/reducers/themeReducer';

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

export default ThemeProvider;
