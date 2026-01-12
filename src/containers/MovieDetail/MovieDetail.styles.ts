import { Box, Stack, styled } from '@mui/material';

export const ImageContainer = styled(Box)(({ theme }) => ({
    overflow: 'hidden',
    width: '85%',
    height: '25vh',
    [theme.breakpoints.up('sm')]: {
        width: '50%',
        height: '30vh',
    },
}));

export const StyledStack = styled(Stack)(({ theme }) => ({
    width: '100%',
    gap: theme.typography.pxToRem(10),
    minHeight: '80vh',
    ...theme.mixins.flexCenter(),
    flexDirection: 'column',
}));
