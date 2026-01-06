import { Outlet, useMatches } from 'react-router-dom';
import { RouteHandleType } from 'types';

import { Stack, useTheme } from '@mui/material';

import { Header, Navbar } from '@containers';

const MobileLayout = () => {
    const matches = useMatches() as Array<{ handle?: RouteHandleType }>;
    const matchedRoutes = matches.find((m) => m.handle);
    const showHeader = matchedRoutes?.handle?.isHeaderRequired ?? true;
    const showNavbar = matchedRoutes?.handle?.isNavbarRequired ?? true;
    const theme = useTheme();
    return (
        <Stack sx={{ margin: theme.spacing(17, 4, 15, 4) }}>
            {showHeader && <Header />}
            <Outlet />
            {showNavbar && <Navbar />}
        </Stack>
    );
};

export default MobileLayout;
