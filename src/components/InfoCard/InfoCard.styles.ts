import { Card, styled } from '@mui/material';

export const StyledCard = styled(Card)(
    ({ theme: { typography, spacing } }) => ({
        width: '100%',
        maxWidth: typography.pxToRem(360),
        borderRadius: spacing(3),
        transition: 'all 0.25s ease',
        '&:hover': {
            transform: `translateY(${typography.pxToRem(-4)})`,
        },
    }),
);
