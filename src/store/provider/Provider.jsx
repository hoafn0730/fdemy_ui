import PropTypes from 'prop-types';

import ThemeProvider from './ThemeProvider';
import PreviewProvider from './PreviewProvider';
import ModalProvider from './ModalProvider';

function Provider({ children }) {
    return (
        <ThemeProvider>
            <PreviewProvider>
                <ModalProvider>{children}</ModalProvider>
            </PreviewProvider>
        </ThemeProvider>
    );
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Provider;
