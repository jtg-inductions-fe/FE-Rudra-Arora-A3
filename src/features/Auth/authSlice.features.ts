import Cookies from 'js-cookie';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
    isLoggedIn: boolean;
    accessToken: string;
};

const initialState: AuthState = {
    isLoggedIn: !!Cookies.get('refresh'),
    accessToken: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        syncAuthState: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
        },
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload;
        },
        removeAccessToken: (state) => {
            state.accessToken = '';
        },
    },
});

export const { syncAuthState, setAccessToken, removeAccessToken } =
    authSlice.actions;
export const authReducer = authSlice.reducer;
