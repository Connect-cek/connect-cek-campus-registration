import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface OTPState {
    email: string;
    otpSent: boolean;
    loading: boolean;
    error: string | null;
}

const initialState: OTPState = {
    email: '',
    otpSent: false,
    loading: false,
    error: null,
};

export const sendOtp = createAsyncThunk(
    'otp/sendOtp',
    async (email: string, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:8000/auth/send-otp', { email });
            return response.data;
        } catch (error) {
            return rejectWithValue('Failed to send OTP. Please try again.');
        }
    }
);

export const otpSlice = createSlice({
    name: 'otp',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        resendOtp: (state) => {
            state.otpSent = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendOtp.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(sendOtp.fulfilled, (state) => {
                state.loading = false;
                state.otpSent = true;
            })
            .addCase(sendOtp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { setEmail, resendOtp } = otpSlice.actions;

export default otpSlice.reducer;