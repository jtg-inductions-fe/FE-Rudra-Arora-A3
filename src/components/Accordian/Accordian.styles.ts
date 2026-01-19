import { AccordionDetails, styled } from '@mui/material';

export const StyledAccordianDetails = styled(AccordionDetails)(({ theme }) => ({
    maxHeight: theme.typography.pxToRem(210),
    overflowY: 'auto',
    borderTop: `1px solid ${theme.palette.divider}`,
    borderColor: 'divider',
    scrollBehavior: 'smooth',

    '&::-webkit-scrollbar': {
        width: theme.spacing(2),
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.grey[400],
    },
}));
