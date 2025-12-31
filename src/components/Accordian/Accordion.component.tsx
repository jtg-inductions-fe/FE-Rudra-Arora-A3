import { toPascalCase } from 'utils';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion as MuiAccordion,
    AccordionDetails,
    AccordionSummary,
    Checkbox,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
} from '@mui/material';

import { AccordionProps } from './Accordion.types';

const Accordion = ({
    Details,
    selectedItem,
    title,
    handleItemsSelected,
}: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0}>
        <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
            <Typography variant="h6">
                {toPascalCase(title)}
                {selectedItem[title].size > 0 &&
                    ` (${selectedItem[title].size})`}
            </Typography>
        </AccordionSummary>

        <AccordionDetails>
            <List dense disablePadding>
                {Details[title]?.map((item) => {
                    const isChecked = selectedItem[title].has(item.title);

                    return (
                        <ListItem key={item.title} disablePadding>
                            <ListItemButton disableRipple>
                                <Checkbox
                                    edge="start"
                                    checked={isChecked}
                                    onChange={(event) =>
                                        handleItemsSelected(
                                            event,
                                            item.title,
                                            title,
                                        )
                                    }
                                />
                                <ListItemText
                                    primary={toPascalCase(item.title)}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </AccordionDetails>
    </MuiAccordion>
);

export default Accordion;
