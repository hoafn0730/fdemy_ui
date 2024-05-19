import PropTypes from 'prop-types';

import ThemeProvider from './ThemeProvider';
import PreviewProvider from './PreviewProvider';
import ModalProvider from './ModalProvider';
import AccountProvider from './AccountProvider';
import AuthModalProvider from './AuthModalProvider';

function Provider({ children }) {
    return (
        <ThemeProvider>
            <PreviewProvider>
                <ModalProvider>
                    <AccountProvider>
                        <AuthModalProvider>{children}</AuthModalProvider>
                    </AccountProvider>
                </ModalProvider>
            </PreviewProvider>
        </ThemeProvider>
    );
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Provider;
