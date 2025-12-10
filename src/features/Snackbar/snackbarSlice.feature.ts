import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SnackbarState } from './snackbarSlice.types';

const initialState: SnackbarState = {
    message: [],
    variant: '',
};

const snackbarStackSlice = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        showSnackbar: (state, action: PayloadAction<SnackbarState>) => {
            state.message = action.payload.message;
            state.variant = action.payload.variant;
        },
        removeSnackbar: (state) => {
            state.message = [];
            state.variant = '';
        },
    },
});

export const { showSnackbar, removeSnackbar } = snackbarStackSlice.actions;
export const snackbarReducer = snackbarStackSlice.reducer;
