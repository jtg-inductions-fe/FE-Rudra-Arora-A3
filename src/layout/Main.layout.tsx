import { Stack, useMediaQuery, useTheme } from '@mui/material';

import DesktopLayout from './Desktop.layout';
import MobileLayout from './Mobile.layout';

const Main = () => {
    const theme = useTheme();

    const isTablet = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Stack
            sx={{
                margin: 'auto',
                maxWidth: theme.typography.pxToRem(1440),
                scrollBehavior: 'smooth',
            }}
        >
            {isTablet ? <DesktopLayout /> : <MobileLayout />}
        </Stack>
    );
};

export default Main;
