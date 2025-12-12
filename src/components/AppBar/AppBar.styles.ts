import { AppBar, IconButton, styled } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    width: '100%',
    position: 'fixed',
    background: theme.palette.common.white,
    padding: theme.spacing(0, 3),
    ...theme.mixins.flex('space-between', 'center'),

    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(0, 5),
    },
}));

export const CustomIconButton = styled(IconButton)(({ theme }) => ({
    width: theme.typography.pxToRem(165),
    height: theme.typography.pxToRem(60),

    [theme.breakpoints.up('md')]: {
        width: theme.typography.pxToRem(175),
        height: theme.typography.pxToRem(65),
    },
}));
