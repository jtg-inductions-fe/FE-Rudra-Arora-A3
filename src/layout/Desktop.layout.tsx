import { Outlet, useMatches } from 'react-router-dom';
import { RouteHandleType } from 'types';

import { Stack } from '@mui/material';

import { Header, Navbar } from '@containers';

const DesktopLayout = () => {
    {
        /* TODO: Add Desktop Layout Here */
    }
    const matches = useMatches() as Array<{ handle?: RouteHandleType }>;
    const matchedRoutes = matches.find(
        (m) => m.handle?.isHeaderRequired && m.handle?.isNavbarRequired,
    );
    const showHeader = matchedRoutes?.handle?.isHeaderRequired ?? true;
    const showNavbar = matchedRoutes?.handle?.isNavbarRequired ?? true;

    return (
        <Stack>
            {showHeader && <Header />}
            {showNavbar && <Navbar />}
            <Outlet />
        </Stack>
    );
};

export default DesktopLayout;
