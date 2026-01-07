import { useNavigate } from 'react-router-dom';

import { Button, useTheme } from '@mui/material';

import { StyledAppBar } from './TopNavigation.styles';
import { TopNavigationProps } from './TopNavigation.types';

const TopNavigation = ({ NavConfig }: TopNavigationProps) => {
    const navigate = useNavigate();
    const { palette } = useTheme();
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
                    }}
                >
                    {item.label}
                </Button>
            ))}
        </StyledAppBar>
    );
};

export default TopNavigation;
