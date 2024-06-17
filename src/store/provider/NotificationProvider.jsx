import { useReducer } from 'react';
import NotificationContext from '~/contexts/notificationContext';

import { initialState, notificationReducer } from '~/store/reducers/notificationReducer';

function NotificationProvider({ children }) {
    const [state, dispatch] = useReducer(notificationReducer, initialState);

    return (
        <NotificationContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
}

export default NotificationProvider;
