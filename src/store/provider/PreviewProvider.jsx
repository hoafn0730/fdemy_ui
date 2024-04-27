import { useReducer } from 'react';

import PreviewContext from '~/contexts/previewContext';
import { previewReducer, initialState } from '~/store/reducers/previewReducer';

function PreviewProvider({ children }) {
    const [state, dispatch] = useReducer(previewReducer, initialState);

    return (
        <PreviewContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </PreviewContext.Provider>
    );
}

export default PreviewProvider;
