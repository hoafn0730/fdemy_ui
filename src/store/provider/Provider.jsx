import PropTypes from 'prop-types';

import SearchProvider from './SearchProvider';
import ThemeProvider from './ThemeProvider';
import PreviewProvider from './PreviewProvider';
import ModalProvider from './ModalProvider';

function Provider({ children }) {
    return (
        <SearchProvider>
            <ThemeProvider>
                <PreviewProvider>
                    <ModalProvider>{children}</ModalProvider>
                </PreviewProvider>
            </ThemeProvider>
        </SearchProvider>
    );
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Provider;
