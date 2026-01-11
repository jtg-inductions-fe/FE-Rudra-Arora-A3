import { useNavigate } from 'react-router-dom';

import { Box, Button, Skeleton } from '@mui/material';

import { CustomIconButton, StyledAppBar } from './AppBar.styles';
import { AppBarProps } from './AppBar.types';
import { Avatar } from '../Avatar';

const AppBar = ({
    isLoggedIn,
    isLoading,
    userInitials,
    buttonLabel,
    logo,
    logoUrl,
    buttonUrl,
}: AppBarProps) => {
    const navigate = useNavigate();

    return (
        <StyledAppBar>
            <CustomIconButton to={logoUrl}>
                <Box
                    sx={{ width: '100%', height: '100%' }}
                    component="img"
                    src={logo}
                    alt="logo"
                />
            </CustomIconButton>

            {isLoggedIn && isLoading && (
                <Skeleton variant="circular" width={40} height={40} />
            )}
            {isLoggedIn && !isLoading && <Avatar intials={userInitials} />}
            {!isLoggedIn && (
                <Button
                    variant="contained"
                    onClick={() => void navigate(buttonUrl)}
                >
                    {buttonLabel}
                </Button>
            )}
        </StyledAppBar>
    );
};

export default AppBar;
