import { useMediaQuery, useTheme } from '@mui/material';

import DesktopLayout from './Desktop.layout';
import MobileLayout from './Mobile.layout';
import { ErrorBoundary } from '@components';
import { Error } from '@pages';


const Main = () => {
    const theme = useTheme();

    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <ErrorBoundary fallback={<Error />}>
            {isDesktop ? <DesktopLayout /> : <MobileLayout />}
        </ErrorBoundary>
    );
};

export default Main;
