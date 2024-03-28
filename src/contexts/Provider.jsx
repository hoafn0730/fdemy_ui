import PropTypes from 'prop-types';

import { SearchProvider } from '~/contexts/searchContext';
import { ThemeProvider } from '~/contexts/themeContext';
import { PreviewProvider } from '~/contexts/previewContext';

function Provider({ children }) {
    return (
        <SearchProvider>
            <ThemeProvider>
                <PreviewProvider>{children}</PreviewProvider>
            </ThemeProvider>
        </SearchProvider>
    );
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Provider;
