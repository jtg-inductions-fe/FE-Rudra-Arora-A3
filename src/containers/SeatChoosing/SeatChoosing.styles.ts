import { Stack, styled } from '@mui/material';

export const Container = styled(Stack)(
    ({ theme: { typography, spacing } }) => ({
        flexShrink: 0,
        position: 'relative',
        minWidth: typography.pxToRem(1400),
        gap: spacing(10),
    }),
);

export const InfoStack = styled(Stack)(
    ({ theme: { typography, spacing, mixins, shadows, palette } }) => ({
        boxShadow: shadows[1],
        borderRadius: spacing(2),
        height: typography.pxToRem(40),
        width: '100%',
        backgroundColor: palette.common.white,
        ...mixins.flexCenter(),
        flexDirection: 'row',
        gap: spacing(2),
    }),
);
