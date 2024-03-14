const actions = {
    ADD_TODO_ITEM: 'ADD_TODO_ITEM',
    REMOVE_TODO_ITEM: 'REMOVE_TODO_ITEM',
    TOGGLE_COMPLETED: 'TOGGLE_COMPLETED',
};

const addTodoItem = (payload) => {
    return { type: actions.ADD_TODO_ITEM, payload };
};
const removeTodoItem = (payload) => {
    return { type: actions.REMOVE_TODO_ITEM, payload };
};
const markAsCompleted = (todoItemId) => {
    return { type: actions.TOGGLE_COMPLETED, todoItemId };
};

export { actions, addTodoItem, removeTodoItem, markAsCompleted };
