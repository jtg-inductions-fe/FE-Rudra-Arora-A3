import { Outlet, useMatches } from 'react-router-dom';
import { RouteHandleType } from 'types';

import { Stack, useTheme } from '@mui/material';

import { Header, Navbar } from '@containers';

const DesktopLayout = () => {
    const matches = useMatches() as Array<{ handle?: RouteHandleType }>;
    const matchedRoutes = matches.find(
        (m) => m.handle?.isHeaderRequired && m.handle?.isNavbarRequired,
    );
    const showHeader = matchedRoutes?.handle?.isHeaderRequired ?? true;
    const showNavbar = matchedRoutes?.handle?.isNavbarRequired ?? true;
    const theme = useTheme();

    return (
        <Stack sx={{ margin: theme.spacing(22, 4, 5, 4) }}>
            {showHeader && <Header />}
            {showNavbar && <Navbar />}
            <Outlet />
        </Stack>
    );
};

export default DesktopLayout;
