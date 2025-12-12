import Cookies from 'js-cookie';

import { createSlice } from '@reduxjs/toolkit';

type AuthState = {
    isLoggedin: boolean;
};

const initialState: AuthState = {
    isLoggedin: !!Cookies.get('refresh'),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        syncAuthState: (state) => {
            const token = Cookies.get('refresh');
            state.isLoggedin = !!token;
        },
    },
});

export const { syncAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;
