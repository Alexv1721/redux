import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: [],
    err: '',
    status: 'idle'
};

const API = 'https://jsonplaceholder.typicode.com/users';

export const fetchusers = createAsyncThunk('usersslicer/fetchuser', async () => {
    const res = await axios.get(API);
    return res.data;
});

export const postuser = createAsyncThunk('userslicer/postuser', async (newUser) => {
    const res = await axios.post(API, newUser);
    return res.data;
});

export const userslicer = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchusers.pending, (state) => {
                state.status = 'Loading';
            })
            .addCase(fetchusers.rejected, (state, action) => {
                state.err = action.error.message;
                state.status = 'failed';
            })
            .addCase(fetchusers.fulfilled, (state, action) => {
                state.status = 'Success';
                state.user = action.payload; // This will replace the current users array with the fetched data
            })
            .addCase(postuser.fulfilled, (state, action) => {
                state.user = state.user.concat(action.payload) // Add new user to the existing array
                state.status = 'success';
            })
            .addCase(postuser.rejected, (state, action) => {
                state.err = action.error.message;
                state.status = 'fail';
            })
            .addCase(postuser.pending, (state) => {
                state.status = 'Loading';
            });
    }
});

export default userslicer.reducer;
