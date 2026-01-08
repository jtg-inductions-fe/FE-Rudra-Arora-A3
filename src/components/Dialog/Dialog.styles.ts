import { AppBar, ListItem, styled } from '@mui/material';

export const DialogAppBar = styled(AppBar)(({ theme }) => ({
    height: theme.typography.pxToRem(60),
    background: theme.palette.background.default,
    ...theme.mixins.flex('space-between', 'center'),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
    ...theme.mixins.flex('center', 'stretch', 0, 'column'),
}));
