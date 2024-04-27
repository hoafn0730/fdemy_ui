import { useReducer } from 'react';

import SearchContext from '~/contexts/searchContext';
import { searchReducer, initialState } from '~/store/reducers/searchReducer';

function SearchProvider({ children }) {
    const [state, dispatch] = useReducer(searchReducer, initialState);

    return (
        <SearchContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
}

export default SearchProvider;
