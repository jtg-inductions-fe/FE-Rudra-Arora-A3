import { useNavigate, useSearchParams } from 'react-router-dom';

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
    const [, setSearchParams] = useSearchParams();

    const handleClick = (param: 'upcoming' | 'past' | 'cancel') => {
        void navigate(ROUTES.PURCHASE_HISTORY);
        setSearchParams(
            {
                purchase: param,
            },
            { replace: true },
        );
    };
    return (
        <Accordion disableGutters>
            <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
                <Typography variant="h3">Purchase History</Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ p: 0 }}>
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
