import { createContext, useReducer } from 'react';

import { searchReducer, initialState } from '~/reducers/searchReducer';

const SearchContext = createContext();

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
export { SearchProvider };

export default SearchContext;
