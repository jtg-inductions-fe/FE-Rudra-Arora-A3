import { useEffect } from 'react';

import { useSnackbar } from 'notistack';

import { useTheme } from '@mui/material';

import { RootState, useAppDispatch, useAppSelector } from '@app';
import { removeSnackbar } from '@features';

export const Snackbar = () => {
    const { enqueueSnackbar } = useSnackbar();
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
                    autoHideDuration: 2500,
                    onClose: () => dispatch(removeSnackbar()),
                    style: {
                        fontSize: theme.typography.pxToRem(15),
                    },
                });
                dispatch(removeSnackbar());
            });
        }
    }, [message, enqueueSnackbar, dispatch]);

    return null;
};
