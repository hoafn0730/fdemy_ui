import { ADD_TODO_ITEM, REMOVE_TODO_ITEM, TOGGLE_COMPLETED } from '../constants';

const initialState = {
    todoList: [],
    isLoading: false,
};

const searchReducer = (state, action) => {
    switch (action.type) {
        // case ADD_TODO_ITEM_REQUEST:
        //     return {
        //         ...state,
        //         todoList: [...state.todoList],
        //         isLoading: true,
        //     };
        case ADD_TODO_ITEM:
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
            };

        case REMOVE_TODO_ITEM: {
            const filteredTodoItem = state.todoList.filter((todoItem) => {
                return todoItem.id !== action.payload.id;
            });
            return { ...state, todoList: filteredTodoItem };
        }

        case TOGGLE_COMPLETED: {
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
