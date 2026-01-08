import { Paper, styled } from '@mui/material';

export const ModalStack = styled(Paper)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: theme.typography.pxToRem(400),
    border: `1px solid ${theme.palette.common.black}`,
    boxShadow: theme.shadows[2],
    padding: theme.spacing(3),
    ...theme.mixins.flexCenter(),
    flexDirection: 'column',
    gap: theme.spacing(2),
    borderRadius: theme.spacing(4),
}));
