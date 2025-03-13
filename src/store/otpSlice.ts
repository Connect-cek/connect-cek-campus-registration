import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../services/api'; // Make sure to import your updated API service

interface OTPState {
    email: string;
    otpSent: boolean;
    loading: boolean;
    error: string | null;
    accessToken: string | null;
}

const initialState: OTPState = {
    email: '',
    otpSent: false,
    loading: false,
    error: null,
    accessToken: null,
};

export const sendOtp = createAsyncThunk(
    'otp/sendOtp',
    async (email: string, { rejectWithValue }) => {
        try {
            const response = await api.post('/auth/send-otp', { email });
            return response.data;
        } catch (error) {
            return rejectWithValue(error?.message || 'Failed to send OTP. Please try again.');
        }
    }
);

export const verifyOtp = createAsyncThunk(
    'otp/verifyOtp',
    async ({ email, otpCode }: { email: string, otpCode: string }, { rejectWithValue }) => {
        try {
            console.log('Sending verification request:', { email, otp_code: otpCode });
            
            const response = await api.post('/auth/verify-otp', { 
                email, 
                otp_code: otpCode 
            });
            
            console.log('Verification response:', response.data);
            
            if (response.data.access_token) {
                localStorage.setItem('token', response.data.access_token);
            }
            
            return response.data;
        } catch (error: any) {
            console.error('OTP verification error:', error);
            
            // Handle different types of errors
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                return rejectWithValue(error.response.data.detail || 'Verification failed');
            } else if (error.request) {
                // The request was made but no response was received
                return rejectWithValue('No response from server');
            } else {
                // Something happened in setting up the request
                return rejectWithValue(error.message || 'An error occurred');
            }
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
        clearErrors: (state) => {
            state.error = null;
        }
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
                state.error = null;
            })
            .addCase(sendOtp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(verifyOtp.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(verifyOtp.fulfilled, (state, action) => {
                state.loading = false;
                state.accessToken = action.payload.access_token;
                state.error = null;
                
                // Store the token in localStorage for persistence
                if (action.payload.access_token) {
                    localStorage.setItem('token', action.payload.access_token);
                }
            })
            .addCase(verifyOtp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { setEmail, resendOtp, clearErrors } = otpSlice.actions;

export default otpSlice.reducer;