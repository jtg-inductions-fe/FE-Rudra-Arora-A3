import { Card, CardContent, styled } from '@mui/material';

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
    padding: theme.spacing(2, 0, 0, 4),

    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
}));

export const StyledCard = styled(Card)(({ theme }) => ({
    transition: 'all 0.25s ease',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: theme.spacing(6),
    },
}));
