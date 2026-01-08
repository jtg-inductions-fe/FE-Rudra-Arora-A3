import { Chip, styled } from '@mui/material';

export const StyledChip = styled(Chip)(({ theme }) => ({
    border: `2px solid ${theme.palette.primary.light}`,
    borderRadius: 1,
}));
