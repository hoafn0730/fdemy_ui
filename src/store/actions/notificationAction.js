import { ADD_NEW_NOTIFICATION } from '../constants';

const addNewNotification = (payload) => {
    return { type: ADD_NEW_NOTIFICATION, payload: payload };
};

export { addNewNotification };
