import * as React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import {
    Button,
    Dialog as MuiDialog,
    IconButton,
    List,
    Slide,
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
    buttonText,
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
                <Button onClick={handleButtonClick} variant="outlined">
                    {buttonText}
                </Button>
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
