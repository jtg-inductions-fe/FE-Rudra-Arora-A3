import { CardContent, styled } from '@mui/material';

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
    padding: 0,
    paddingLeft: theme.spacing(4),
    paddingTop: theme.spacing(2),

    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
}));
