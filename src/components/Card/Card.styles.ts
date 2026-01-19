import { Card, CardContent, styled } from '@mui/material';

export const StyledCardContent = styled(CardContent)(() => ({
    padding: 0,
}));

export const StyledCard = styled(Card)(({ theme }) => ({
    transition: 'all 0.25s ease',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: theme.spacing(6),
    },
}));
