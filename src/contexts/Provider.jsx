import PropTypes from 'prop-types';

import { SearchProvider } from '~/contexts/searchContext';
import { ThemeProvider } from '~/contexts/themeContext';

function Provider({ children }) {
    return (
        <SearchProvider>
            <ThemeProvider>{children}</ThemeProvider>
        </SearchProvider>
    );
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Provider;
