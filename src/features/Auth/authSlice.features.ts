import Cookies from 'js-cookie';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
    isLoggedIn: boolean;
};

const initialState: AuthState = {
    isLoggedIn: !!Cookies.get('refresh'),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        syncAuthState: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
        },
    },
});

export const { syncAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;
