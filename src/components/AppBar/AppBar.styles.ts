import { Link } from 'react-router-dom';

import { AppBar, styled } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    width: '100%',
    position: 'fixed',
    background: theme.palette.common.white,
    padding: theme.spacing(0, 3),
    ...theme.mixins.flex('space-between', 'center'),

    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(0, 6),
    },
}));

export const CustomIconButton = styled(Link)(({ theme }) => ({
    width: theme.typography.pxToRem(170),
    height: theme.typography.pxToRem(60),
    marginTop: theme.spacing(1),

    [theme.breakpoints.up('md')]: {
        width: theme.typography.pxToRem(175),
    },
}));
