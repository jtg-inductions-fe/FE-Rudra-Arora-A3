import { useEffect } from 'react';

import { useSnackbar } from 'notistack';

import CloseIcon from '@mui/icons-material/Close';
import { IconButton, useTheme } from '@mui/material';

import { RootState, useAppDispatch, useAppSelector } from '@app';
import { removeSnackbar } from '@features';

const Snackbar = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const dispatch = useAppDispatch();
    const { message, variant } = useAppSelector(
        (state: RootState) => state.snackbar,
    );
    const theme = useTheme();

    useEffect(() => {
        if (message) {
            message.forEach((m) => {
                enqueueSnackbar(m, {
                    variant: variant || 'info',
                    autoHideDuration: 2000,
                    onClose: () => dispatch(removeSnackbar()),
                    style: {
                        fontSize: theme.typography.pxToRem(15),
                    },
                    action: () => (
                        <IconButton
                            onClick={() => closeSnackbar()}
                            sx={{ color: theme.palette.common.white }}
                        >
                            <CloseIcon />
                        </IconButton>
                    ),
                });
                dispatch(removeSnackbar());
            });
        }
    }, [message, enqueueSnackbar, dispatch]);

    return null;
};

export default Snackbar;
