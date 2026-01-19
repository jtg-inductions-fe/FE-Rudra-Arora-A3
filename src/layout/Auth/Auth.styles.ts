import { Stack, styled } from '@mui/material';

import authBackground from '../../assets/images/authBg.webp';

export const StyledStack = styled(Stack)(({ theme }) => ({
    padding: theme.spacing(0, 4),
    ...theme.mixins.flexCenter(),
    height: '100dvh',
    backgroundImage: `url(${authBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    [theme.breakpoints.up('sm')]: {
        padding: 0,
        margin: theme.spacing(0, 4),
        backgroundImage: 'none',
    },
}));
