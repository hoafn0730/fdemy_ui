import { useEffect, useReducer } from 'react';
import AccountContext from '~/contexts/accountContext';
import { accountReducer, initialState } from '../reducers/accountReducer';
import { injectStore } from '~/utils/httpRequest';
import useLocalStorage from '~/hooks/useLocalStorage';

function AccountProvider({ children }) {
    const [state, dispatch] = useReducer(accountReducer, initialState);
    const [, setAuth] = useLocalStorage('auth', null);

    useEffect(() => {
        setAuth(JSON.stringify(state));
    }, [state, setAuth]);

    injectStore(state);

    return (
        <AccountContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </AccountContext.Provider>
    );
}

export default AccountProvider;
