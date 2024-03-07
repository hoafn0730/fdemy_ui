import { createContext, useReducer } from 'react';

import { searchReducer, initialState } from '~/reducers/searchReducer';
import actions from '~/actions/searchAction';

const SearchContext = createContext();

function SearchProvider({ children }) {
    const [state, dispatch] = useReducer(searchReducer, initialState);

    const value = {
        todoList: state.todoList,
        addTodoItem: (payload) => {
            dispatch({ type: actions.ADD_TODO_ITEM, payload });
        },
        removeTodoItem: (todoItemId) => {
            dispatch({ type: actions.REMOVE_TODO_ITEM, todoItemId });
        },
        markAsCompleted: (todoItemId) => {
            dispatch({ type: actions.TOGGLE_COMPLETED, todoItemId });
        },
    };

    return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}
export { SearchProvider };

export default SearchContext;
