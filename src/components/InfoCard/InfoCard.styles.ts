import { Stack, styled } from '@mui/material';

export const ContentStack = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    gap: theme.spacing(1),
    textAlign: 'center',
}));
