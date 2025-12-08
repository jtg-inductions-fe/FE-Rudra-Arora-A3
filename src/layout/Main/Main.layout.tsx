import { useMediaQuery, useTheme } from '@mui/material';

import { DesktopLayout } from '../Desktop';
import { MobileLayout } from '../Mobile';

export const Main = () => {
    const theme = useTheme();

    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    return isDesktop ? <DesktopLayout /> : <MobileLayout />;
};
