import { Outlet, useMatches } from 'react-router-dom';
import { RouteHandleType } from 'types';

import { Stack, useTheme } from '@mui/material';

import { selectGlobalApiError, useAppSelector } from '@app';
import { ErrorBoundary } from '@components';
import { Header, Navbar } from '@containers';

const DesktopLayout = () => {
    const matches = useMatches() as Array<{ handle?: RouteHandleType }>;
    const matchedRoutes = matches.find((m) => m.handle);
    const showHeader = matchedRoutes?.handle?.isHeaderRequired ?? true;
    const showNavbar = matchedRoutes?.handle?.isNavbarRequired ?? true;
    const theme = useTheme();
    const error = useAppSelector(selectGlobalApiError);

    return (
        <Stack
            sx={{
                margin: theme.spacing(showNavbar ? 22 : 14, 4, 5, 4),
            }}
        >
            {showHeader && <Header />}
            {showNavbar && <Navbar />}
            <ErrorBoundary error={error}>
                <Outlet />
            </ErrorBoundary>
        </Stack>
    );
};

export default DesktopLayout;
