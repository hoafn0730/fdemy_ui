import { useReducer } from 'react';

import ModalContext from '~/contexts/modalContext';
import { initialState, modalReducer } from '~/store/reducers/modalReducer';

function ModalProvider({ children }) {
    const [state, dispatch] = useReducer(modalReducer, initialState);

    return (
        <ModalContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;
