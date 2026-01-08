import * as React from 'react';

import { toCapitalized } from 'utils';

import CloseIcon from '@mui/icons-material/Close';
import {
    Button,
    Checkbox,
    Dialog as MuiDialog,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Slide,
    Toolbar,
    useTheme,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

import { DialogAppBar, StyledListItem } from './Dialog.styles';
import { DialogProps } from './Dialog.types';
import { Typography } from '../Typography';

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
}: DialogProps) => {
    const theme = useTheme();

    return (
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
                    {ListHeading.map((heading) => {
                        const items = DialogListData[heading];
                        return (
                            <StyledListItem disablePadding key={heading}>
                                <ListItemText
                                    sx={{
                                        background: theme.palette.grey[400],
                                        p: theme.spacing(2, 5, 2),
                                    }}
                                >
                                    <Typography variant="body1">
                                        {toCapitalized(heading)}
                                    </Typography>
                                </ListItemText>

                                {items?.map((item, index) => (
                                    <List disablePadding key={item.title}>
                                        {index !== 0 && <Divider />}
                                        <ListItem
                                            sx={{
                                                ...theme.mixins.flex(
                                                    'space-between',
                                                    'center',
                                                ),
                                                p: theme.spacing(1, 5),
                                            }}
                                        >
                                            <Typography variant="body1">
                                                {toCapitalized(item.title)}
                                            </Typography>
                                            <Checkbox
                                                checked={
                                                    selectedCheckedBox[
                                                        heading
                                                    ] instanceof Set
                                                        ? selectedCheckedBox[
                                                              heading
                                                          ].has(item.title)
                                                        : selectedCheckedBox[
                                                              heading
                                                          ] === item.title
                                                }
                                                onChange={(event) =>
                                                    handleCheckBox(
                                                        event,
                                                        item.title,
                                                        heading,
                                                    )
                                                }
                                            />
                                        </ListItem>
                                    </List>
                                ))}
                            </StyledListItem>
                        );
                    })}
                </List>
            </MuiDialog>
        </React.Fragment>
    );
};

export default Dialog;
