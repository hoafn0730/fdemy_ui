import { ADD_TODO_ITEM, REMOVE_TODO_ITEM, TOGGLE_COMPLETED } from '../constants';

const addTodoItem = (payload) => {
    return { type: ADD_TODO_ITEM, payload };
};
const removeTodoItem = (payload) => {
    return { type: REMOVE_TODO_ITEM, payload };
};
const markAsCompleted = (todoItemId) => {
    return { type: TOGGLE_COMPLETED, todoItemId };
};

export { addTodoItem, removeTodoItem, markAsCompleted };
