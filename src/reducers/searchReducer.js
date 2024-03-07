import actions from '~/actions/searchAction';

const initialState = {
    todoList: [],
};

const searchReducer = (state, action) => {
    switch (action.type) {
        case actions.ADD_TODO_ITEM:
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
            };

        case actions.REMOVE_TODO_ITEM: {
            const filteredTodoItem = state.todoList.filter((todoItem) => todoItem.id !== action.todoItemId);
            return { todoList: filteredTodoItem };
        }

        case actions.TOGGLE_COMPLETED: {
            const updatedTodoList = state.todoList.map((todoItem) =>
                todoItem.id === action.todoItemId ? { ...todoItem, completed: !todoItem.completed } : todoItem,
            );
            return { todoList: updatedTodoList };
        }

        default:
            return state;
    }
};

export { searchReducer, initialState };
