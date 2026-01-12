import { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import {
    BottomNavigation as MuiBottomNavigation,
    BottomNavigationAction,
    Paper,
} from '@mui/material';

import { BottomNavigationProps } from './BottomNavigation.types';

export const BottomNavigation = ({ NavConfig }: BottomNavigationProps) => {
    const [value, setValue] = useState<number | null>(0);
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Paper
            sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
            elevation={5}
            component="nav"
        >
            <MuiBottomNavigation
                showLabels
                value={value}
                onChange={(_event, newValue: number) => {
                    if (
                        NavConfig.map((item) => item.to).includes(
                            location.pathname,
                        )
                    ) {
                        setValue(newValue);
                    } else {
                        setValue(null);
                    }
                }}
                sx={{ gap: '20%' }}
            >
                {NavConfig.map((item) => (
                    <BottomNavigationAction
                        key={item.label}
                        label={item.label}
                        icon={<item.icon />}
                        onClick={() => void navigate(item.to)}
                    />
                ))}
            </MuiBottomNavigation>
        </Paper>
    );
};
