import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk to handle login
export const loginUser = createAsyncThunk('auth/loginUser', async (userCredentials) => {
    try {
        const response = await axios.post('https://your-api-url.com/login', userCredentials);
        return response.data; // Assuming the response contains the token or user data
    } catch (error) {
        throw new Error('Invalid credentials');
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        status: 'idle', // Can be 'idle', 'loading', 'succeeded', 'failed'
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user; // Save user data
                state.token = action.payload.token; // Save token
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
