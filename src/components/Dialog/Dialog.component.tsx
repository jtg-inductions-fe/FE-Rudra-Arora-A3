import * as React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import {
    Button,
    Dialog as MuiDialog,
    IconButton,
    List,
    Slide,
    Stack,
    Toolbar,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

import { DialogAppBar } from './Dialog.styles';
import { DialogProps } from './Dialog.types';
import { Accordion } from '../Accordian';

const Transition = React.forwardRef(function transitionDialog(
    props: TransitionProps & {
        children: React.ReactElement<unknown>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Dialog = ({
    open,
    handleClose,
    DialogListData,
    ListHeading,
    handleCheckBox,
    selectedCheckedBox,
    handleButtonClick,
    buttonText1,
    buttonText2,
    handleClearButton,
}: DialogProps) => (
    <React.Fragment>
        <MuiDialog
            fullScreen
            open={open}
            onClose={handleClose}
            slots={{
                transition: Transition,
            }}
        >
            <DialogAppBar elevation={0} position="sticky">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                        sx={{ p: 0 }}
                    >
                        <CloseIcon color="primary" />
                    </IconButton>
                </Toolbar>
                <Stack flexDirection="row" gap={2}>
                    <Button onClick={handleButtonClick} variant="outlined">
                        {buttonText1}
                    </Button>
                    <Button onClick={handleClearButton} variant="contained">
                        {buttonText2}
                    </Button>
                </Stack>
            </DialogAppBar>

            <List sx={{ p: 0 }}>
                {ListHeading.map((heading) => (
                    <Accordion
                        key={heading}
                        Details={DialogListData}
                        handleItemsSelected={handleCheckBox}
                        selectedItem={selectedCheckedBox}
                        title={heading}
                    />
                ))}
            </List>
        </MuiDialog>
    </React.Fragment>
);

export default Dialog;
