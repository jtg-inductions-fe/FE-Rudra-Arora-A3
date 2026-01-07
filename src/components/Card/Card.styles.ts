import { CardContent, styled } from '@mui/material';

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
    padding: theme.spacing(2, 0, 0, 4),

    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
}));
