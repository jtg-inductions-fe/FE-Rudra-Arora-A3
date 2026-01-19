import { Container, useMediaQuery, useTheme } from '@mui/material';

import DesktopLayout from './Desktop.layout';
import MobileLayout from './Mobile.layout';

const Main = () => {
    const theme = useTheme();

    const isTablet = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Container maxWidth="lg">
            {isTablet ? <DesktopLayout /> : <MobileLayout />}
        </Container>
    );
};

export default Main;
