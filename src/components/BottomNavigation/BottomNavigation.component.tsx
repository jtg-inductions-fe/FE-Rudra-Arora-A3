import { useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import {
    BottomNavigation as MuiBottomNavigation,
    BottomNavigationAction,
    Paper,
} from '@mui/material';

import { BottomNavigationProps } from './BottomNavigation.types';

export const BottomNavigation = ({ NavConfig }: BottomNavigationProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [value, setValue] = useState<number | null>(null);

    useEffect(() => {
        const index = NavConfig.findIndex(
            (item) => item.to === location.pathname,
        );
        setValue(index === -1 ? null : index);
    }, [location.pathname, NavConfig]);

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
                    setValue(newValue);
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
