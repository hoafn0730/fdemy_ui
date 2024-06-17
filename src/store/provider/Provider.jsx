import PropTypes from 'prop-types';

import ThemeProvider from './ThemeProvider';
import PreviewProvider from './PreviewProvider';
import ModalProvider from './ModalProvider';
import AccountProvider from './AccountProvider';
import AuthModalProvider from './AuthModalProvider';
import NotificationProvider from './NotificationProvider';

function Provider({ children }) {
    return (
        <ThemeProvider>
            <PreviewProvider>
                <ModalProvider>
                    <AccountProvider>
                        <NotificationProvider>
                            <AuthModalProvider>{children}</AuthModalProvider>
                        </NotificationProvider>
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
