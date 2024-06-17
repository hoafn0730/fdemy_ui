import { ADD_NEW_NOTIFICATION } from '../constants';

const initialState = {
    items: [],
};

const notificationReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_NOTIFICATION: {
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        }

        default:
            return state;
    }
};

export { initialState, notificationReducer };
