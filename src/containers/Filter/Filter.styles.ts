import { Stack, styled, ToggleButtonGroup } from '@mui/material';

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(
    ({ theme }) => ({
        width: '100%',
        flexWrap: 'wrap',
        gap: theme.spacing(2),
        '& .MuiToggleButton-root': {
            border: '1px solid',
            color: theme.palette.primary.main,
            borderRadius: '0',
        },
    }),
);

export const StyledStack = styled(Stack)(({ theme }) => ({
    alignSelf: 'flex-start',
    boxShadow: theme.shadows[3],
    borderRadius: theme.typography.pxToRem(10),
    width: '30%',
    marginTop: theme.spacing(17),
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(4),
    gap: theme.spacing(3),
}));
