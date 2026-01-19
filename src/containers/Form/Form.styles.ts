import { Box, BoxProps, Stack, styled, TextField } from '@mui/material';

export const FormStack = styled(Stack)(({ theme }) => ({
    ...theme.mixins.flexCenter(),
    boxShadow: theme.shadows[3],
    padding: theme.spacing(6, 5),
    borderRadius: theme.spacing(2),
    gap: theme.spacing(5),
    width: '100%',
    maxWidth: theme.typography.pxToRem(350),
    flex: 1,
    backgroundColor: theme.palette.common.white,
    height: '100%',

    [theme.breakpoints.up('sm')]: {
        boxShadow: 'none',
        padding: theme.spacing(7, 5),
        maxWidth: theme.typography.pxToRem(450),
        backgroundColor: theme.palette.background.default,
    },

    [theme.breakpoints.up('md')]: {
        maxWidth: theme.typography.pxToRem(600),
    },
}));

export const StyledStack = styled(Stack)<BoxProps>(({ theme }) => ({
    flexDirection: 'row',
    ...theme.mixins.flexCenter(),
    gap: theme.spacing(8),
}));

export const AuthImageBox = styled(Box)(({ theme }) => ({
    borderRadius: theme.typography.pxToRem(30),
    overflow: 'hidden',
    flex: 1,
    height: theme.typography.pxToRem(500),
    maxWidth: theme.typography.pxToRem(450),
}));

export const CustomTextField = styled(TextField)(({ theme }) => ({
    width: '90%',
    maxWidth: theme.typography.pxToRem(280),

    [theme.breakpoints.up('sm')]: {
        width: '80%',
    },

    [theme.breakpoints.up('md')]: {
        width: '90%',
    },

    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.common.white,
    },

    '& .MuiOutlinedInput-root': {
        backgroundColor: theme.palette.grey[500],
        borderRadius: theme.typography.pxToRem(15),
    },
}));
