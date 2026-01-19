import { Card, styled } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(3),

    [theme.breakpoints.up('md')]: {
        ...theme.mixins.flex('flex-start', 'center', theme.spacing(2)),
    },
}));
