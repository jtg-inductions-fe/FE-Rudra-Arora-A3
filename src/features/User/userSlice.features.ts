import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserState = {
    name: string;
    email: string;
    phone_number: string;
};

const initialState: UserState = {
    name: '',
    email: '',
    phone_number: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.phone_number = action.payload.phone_number;
        },
        clearUser: (state) => {
            state.email = '';
            state.name = '';
            state.phone_number = '';
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
