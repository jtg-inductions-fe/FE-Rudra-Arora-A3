import { Card, styled } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: theme.typography.pxToRem(360),
    borderRadius: theme.spacing(3),
    transition: 'all 0.25s ease',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: theme.spacing(6),
    },
}));
