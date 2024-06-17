import { useContext } from 'react';
import NotificationContext from '~/contexts/notificationContext';

const useNotification = () => {
    const { state, dispatch } = useContext(NotificationContext);
    return { state, dispatch };
};

export default useNotification;
