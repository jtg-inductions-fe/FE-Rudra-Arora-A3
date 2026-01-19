import { Outlet, useMatches } from 'react-router-dom';
import { RouteHandleType } from 'types';

import { Stack, useTheme } from '@mui/material';

import { selectGlobalApiError, useAppSelector } from '@app';
import { ErrorBoundary } from '@components';
import { Header, Navbar } from '@containers';

const MobileLayout = () => {
    const matches = useMatches() as Array<{ handle?: RouteHandleType }>;
    const matchedRoutes = matches.find((m) => m.handle);
    const showHeader = matchedRoutes?.handle?.isHeaderRequired ?? true;
    const showNavbar = matchedRoutes?.handle?.isNavbarRequired ?? true;
    const theme = useTheme();
    const error = useAppSelector(selectGlobalApiError);

    return (
        <>
            {showHeader && <Header />}
            <Stack
                component="main"
                sx={{
                    margin: theme.spacing(18, 0),
                }}
            >
                <ErrorBoundary error={error}>
                    <Outlet />
                </ErrorBoundary>
            </Stack>
            {showNavbar && <Navbar />}
        </>
    );
};

export default MobileLayout;
