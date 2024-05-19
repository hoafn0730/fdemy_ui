import { CLOSE_MODAL, CLOSING_MODAL, OPEN_MODAL } from '../constants';

const initialState = {
    isOpen: false,
    isClosing: false,
};

const authModalReducer = (state, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                isOpen: true,
                isClosing: false,
            };

        case CLOSING_MODAL:
            return {
                ...state,
                isOpen: true,
                isClosing: true,
            };

        case CLOSE_MODAL:
            return {
                ...state,
                isOpen: false,
                isClosing: false,
            };

        default:
            return state;
    }
};

export { authModalReducer, initialState };
