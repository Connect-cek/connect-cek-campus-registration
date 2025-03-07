import { configureStore } from '@reduxjs/toolkit';
import otpReducer from './otpSlice';

const store = configureStore({
    reducer: {
        otp: otpReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;