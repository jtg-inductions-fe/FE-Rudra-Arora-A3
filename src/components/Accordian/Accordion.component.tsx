import { toCapitalized } from 'utils';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion as MuiAccordion,
    AccordionSummary,
    Checkbox,
    List,
    ListItem,
    ListItemText,
    Typography,
} from '@mui/material';

import { StyledAccordianDetails } from './Accordian.styles';
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
                {toCapitalized(title)}
                {selectedItem[title] instanceof Set &&
                    selectedItem[title].size > 0 &&
                    ` (${selectedItem[title].size})`}
            </Typography>
        </AccordionSummary>

        <StyledAccordianDetails>
            <List dense disablePadding>
                {Details[title]?.map((item) => {
                    const isChecked =
                        selectedItem[title] instanceof Set
                            ? selectedItem[title].has(item.title)
                            : selectedItem[title] === item.title;

                    return (
                        <ListItem
                            sx={{ pl: 2 }}
                            key={item.title}
                            disablePadding
                        >
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
                            <ListItemText primary={toCapitalized(item.title)} />
                        </ListItem>
                    );
                })}
            </List>
        </StyledAccordianDetails>
    </MuiAccordion>
);

export default Accordion;
