import { CLOSE_PREVIEW, OPEN_PREVIEW } from '../constants';

const initialState = {
    isOpen: false,
};

const previewReducer = (state, action) => {
    switch (action.type) {
        case OPEN_PREVIEW:
            return {
                ...state,
                isOpen: true,
            };

        case CLOSE_PREVIEW:
            return {
                ...state,
                isOpen: false,
            };

        default:
            return state;
    }
};

export { previewReducer, initialState };
