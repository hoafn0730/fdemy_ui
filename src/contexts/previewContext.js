import { createContext, useContext, useReducer } from 'react';

import { previewReducer, initialState } from '~/store/reducer/previewReducer';

const PreviewContext = createContext();

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

const usePreview = () => {
    return useContext(PreviewContext);
};
export { PreviewProvider, usePreview };

export default PreviewContext;
