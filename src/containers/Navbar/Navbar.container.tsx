import { useMediaQuery, useTheme } from '@mui/material';

import { BottomNavigation, TopNavigation } from '@components';

import { DesktopNavbarConfig, MobileNavbarConfig } from './Navbar.config';

const Navbar = () => {
    const theme = useTheme();

    const isTablet = useMediaQuery(theme.breakpoints.up('sm'));

    return isTablet ? (
        <TopNavigation NavConfig={DesktopNavbarConfig} />
    ) : (
        <BottomNavigation NavConfig={MobileNavbarConfig} />
    );
};
export default Navbar;
