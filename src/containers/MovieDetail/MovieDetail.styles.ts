import { Box, BoxProps, Stack, styled } from '@mui/material';

export const ImageContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '25dvh',
    [theme.breakpoints.up('sm')]: {
        height: '30dvh',
    },
    [theme.breakpoints.up('md')]: {
        width: '40%',
        minHeight: '50dvh',
    },
}));

export const StyledStack = styled(Stack)<BoxProps>(
    ({ theme: { spacing, mixins, breakpoints } }) => ({
        minHeight: '80vh',
        ...mixins.flexCenter(),
        padding: spacing(0, 5),
        gap: spacing(2.5),

        [breakpoints.up('md')]: {
            flexDirection: 'row',
            gap: spacing(5),
        },
    }),
);

export const ContentStack = styled(Stack)(({ theme }) => ({
    gap: theme.spacing(2),
    alignItems: 'flex-start',
    [theme.breakpoints.up('md')]: {
        maxHeight: theme.typography.pxToRem(700),
    },
}));

export const MainStack = styled(Stack)(({ theme }) => ({
    gap: theme.spacing(5),

    [theme.breakpoints.up('md')]: {
        minHeight: '50dvh',
        maxWidth: '60%',
        justifyContent: 'space-between',
    },
}));
