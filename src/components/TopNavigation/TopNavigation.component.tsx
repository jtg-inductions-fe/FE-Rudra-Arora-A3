import { useLocation, useNavigate } from 'react-router-dom';

import { Button, useTheme } from '@mui/material';

import { StyledAppBar } from './TopNavigation.styles';
import { TopNavigationProps } from './TopNavigation.types';

const TopNavigation = ({ NavConfig }: TopNavigationProps) => {
    const navigate = useNavigate();
    const { palette } = useTheme();
    const location = useLocation();

    return (
        <StyledAppBar component="nav">
            {NavConfig.map((item) => (
                <Button
                    key={item.label}
                    variant="text"
                    onClick={() => void navigate(item.to)}
                    sx={{
                        '&: hover': {
                            color: palette.common.black,
                        },
                        color:
                            location.pathname === item.to
                                ? palette.common.black
                                : palette.common.white,
                        fontWeight:
                            location.pathname === item.to ? 'bold' : 'unset',
                    }}
                >
                    {item.label}
                </Button>
            ))}
        </StyledAppBar>
    );
};

export default TopNavigation;
