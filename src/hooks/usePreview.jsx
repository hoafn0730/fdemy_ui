import { useContext } from 'react';
import PreviewContext from '~/contexts/previewContext';

const usePreview = () => {
    const { state, dispatch } = useContext(PreviewContext);
    return { state, dispatch };
};

export default usePreview;
