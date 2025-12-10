import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { store } from '@app';
import { Snackbar } from '@components';
import { router } from '@routes';
import { theme } from '@theme';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <SnackbarProvider
                    maxSnack={3}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <Snackbar />
                    <RouterProvider router={router} />
                </SnackbarProvider>
            </ThemeProvider>
        </Provider>
    </StrictMode>,
);
