import { useReducer } from 'react';
import AuthModalContext from '~/contexts/authModalContext';

import { initialState, authModalReducer } from '~/store/reducers/authModalReducer';

function AuthModalProvider({ children }) {
    const [state, dispatch] = useReducer(authModalReducer, initialState);

    return (
        <AuthModalContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </AuthModalContext.Provider>
    );
}

export default AuthModalProvider;
