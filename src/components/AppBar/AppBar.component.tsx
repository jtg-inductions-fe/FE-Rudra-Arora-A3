import { useNavigate } from 'react-router-dom';

import { Avatar, Box, Button, Skeleton } from '@mui/material';

import { CustomIconButton, StyledAppBar } from './AppBar.styles';
import { AppBarProps } from './AppBar.types';

const AppBar = ({
    isLoggedin,
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
            <CustomIconButton onClick={() => void navigate(logoUrl)}>
                <Box
                    sx={{ width: '100%', height: '100%' }}
                    component="img"
                    src={logo}
                />
            </CustomIconButton>

            {!isLoggedin ? (
                <Button
                    variant="contained"
                    onClick={() => void navigate(buttonUrl)}
                >
                    {buttonLabel}
                </Button>
            ) : isLoading ? (
                <Skeleton variant="circular" width={40} height={40} />
            ) : (
                <Avatar>{userInitials}</Avatar>
            )}
        </StyledAppBar>
    );
};

export default AppBar;
