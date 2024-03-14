import { createContext, useContext, useReducer } from 'react';

import { searchReducer, initialState } from '~/store/reducer/searchReducer';

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

const useSearchContext = () => {
    return useContext(SearchContext);
};
export { SearchProvider, useSearchContext };

export default SearchContext;
