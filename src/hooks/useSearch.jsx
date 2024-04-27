import { useContext } from 'react';
import SearchContext from '~/contexts/searchContext';

const useSearch = () => {
    const { state, dispatch } = useContext(SearchContext);
    return { state, dispatch };
};

export default useSearch;
