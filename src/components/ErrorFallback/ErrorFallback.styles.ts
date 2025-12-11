import { Box, BoxProps, styled } from '@mui/material';

export const StyledBox = styled(Box)<BoxProps>(
    ({ theme: { mixins, spacing, typography } }) => ({
        ...mixins.flexCenter('column'),
        gap: spacing(4),
        textAlign: 'center',
        maxWidth: typography.pxToRem(1320),
        margin: 'auto',
        height: '100vh',
    }),
);

export const StyledImage = styled('img')(({ theme: { breakpoints } }) => ({
    width: '60%',
    height: 'auto',
    pointerEvents: 'none',
    [breakpoints.up('sm')]: {
        width: '40%',
    },
}));
