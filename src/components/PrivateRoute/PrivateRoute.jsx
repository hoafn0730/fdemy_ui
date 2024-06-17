import { useEffect } from 'react';
import useAccount from '~/hooks/useAccount';
import useAuthModal from '~/hooks/useAuthModal';
import { openAuthModal } from '~/store/actions/authModalAction';

function PrivateRoute({ children }) {
    const {
        state: { isLogin },
    } = useAccount();
    const { dispatch } = useAuthModal();

    useEffect(() => {
        const timeOut = setTimeout(() => {
            if (!isLogin) {
                dispatch(openAuthModal());
            }
        }, 3000);
        return () => clearTimeout(timeOut);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return isLogin ? children : <div></div>;
}

export default PrivateRoute;
