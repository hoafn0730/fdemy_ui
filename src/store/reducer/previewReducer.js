import { actions } from '~/store/action/previewAction';

const initialState = {
    isOpen: false,
};

const previewReducer = (state, action) => {
    switch (action.type) {
        case actions.OPEN_PREVIEW:
            return {
                ...state,
                isOpen: true,
            };

        case actions.CLOSE_PREVIEW:
            return {
                ...state,
                isOpen: false,
            };

        default:
            return state;
    }
};

export { previewReducer, initialState };
