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
        if (!isLogin) {
            dispatch(openAuthModal());
        }
    }, []);

    return isLogin ? children : <div></div>;
}

export default PrivateRoute;
