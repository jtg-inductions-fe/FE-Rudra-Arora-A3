import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    // TODO: Add reducers as features are implemented
    reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
