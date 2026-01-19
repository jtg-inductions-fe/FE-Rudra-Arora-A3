import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    List,
    ListItemButton,
    ListItemText,
    Typography,
} from '@mui/material';

import { PURCHASE_HISTORY_FIELDS, ROUTES } from '@constants';

const PurchaseHistoryContainer = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(true);

    const handleClick = (param: 'upcoming' | 'past' | 'cancel') => {
        void navigate(
            {
                pathname: ROUTES.PURCHASE_HISTORY,
                search: `?purchase=${param}`,
            },
            { replace: true },
        );
    };

    return (
        <Accordion
            disableGutters
            expanded={open}
            onChange={() => setOpen((prev) => !prev)}
        >
            <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
                <Typography variant="h3">Purchase History</Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ padding: 0 }}>
                <List disablePadding>
                    {PURCHASE_HISTORY_FIELDS.map((item) => (
                        <ListItemButton
                            onClick={() => handleClick(item.param)}
                            key={item.label}
                        >
                            <ListItemText primary={item.label} />
                            <ChevronRightIcon color="primary" />
                        </ListItemButton>
                    ))}
                </List>
            </AccordionDetails>
        </Accordion>
    );
};

export default PurchaseHistoryContainer;
