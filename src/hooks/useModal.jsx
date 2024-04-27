import { useContext } from 'react';
import ModalContext from '~/contexts/modalContext';

const useModal = () => {
    const { state, dispatch } = useContext(ModalContext);
    return { state, dispatch };
};

export default useModal;
