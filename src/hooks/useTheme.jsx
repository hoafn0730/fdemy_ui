import { useContext } from 'react';
import ThemeContext from '~/contexts/themeContext';

const useTheme = () => {
    const { state, dispatch } = useContext(ThemeContext);
    return { state, dispatch };
};

export default useTheme;
