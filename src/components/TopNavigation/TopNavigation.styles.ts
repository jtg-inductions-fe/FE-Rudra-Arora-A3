import { AppBar, AppBarProps, styled } from '@mui/material';

export const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
    marginTop: theme.typography.pxToRem(64),
    padding: theme.spacing(1, 2),
    ...theme.mixins.flex('flex-start', 'stretch', '10px'),

    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(0.5, 6),
        gap: theme.spacing(4),
    },
}));
