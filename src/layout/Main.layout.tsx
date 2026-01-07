import { useMediaQuery, useTheme } from '@mui/material';

import DesktopLayout from './Desktop.layout';
import MobileLayout from './Mobile.layout';

const Main = () => {
    const theme = useTheme();

    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    return isDesktop ? <DesktopLayout /> : <MobileLayout />;
};

export default Main;
