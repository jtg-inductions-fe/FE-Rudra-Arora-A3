import { Card, styled } from '@mui/material';

export const StyledCard = styled(Card)(({ theme: { typography, mixins } }) => ({
    width: '100%',
    maxWidth: typography.pxToRem(360),
    transition: 'all 0.25s ease',
    '&:hover': {
        transform: `translateY(${typography.pxToRem(-4)})`,
    },
    ...mixins.flex('space-between', 'stretch', '', 'column'),
}));
