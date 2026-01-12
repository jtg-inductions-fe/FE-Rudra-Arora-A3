import { AppBar, AppBarProps, styled } from '@mui/material';

export const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
    marginTop: theme.typography.pxToRem(55),
    padding: theme.spacing(0, 2.5),
    ...theme.mixins.flex('flex-start', 'stretch', '10px'),

    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(0, 6),
        gap: theme.spacing(4),
    },
}));
