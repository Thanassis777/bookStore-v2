import {RootState} from '../index';
import {createAsyncThunk, createSelector, createSlice} from '@reduxjs/toolkit';
import {postService} from '../../api';
import {ILogin, SignInProps} from '../../pages/Login/formModel';

export interface UserRole {
    role: 'admin' | 'user' | null;
}

export interface UserState {
    user: {
        name: string;
        email: string;
    } & UserRole;
    token: string;
}

export const initialState: UserState = {
    user: null,
    token: '',
};

export const signInWithUser = createAsyncThunk(
    'userSignIn',
    async (signInData: SignInProps, {rejectWithValue}) => {
        try {
            const response = await postService('/users/login', signInData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const signUpUser = createAsyncThunk(
    'userSignUp',
    async (signUnData: ILogin, {rejectWithValue}) => {
        try {
            const response = await postService('/users', signUnData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const user = createSlice({
    name: 'category',
    initialState,
    reducers: {
        clearUser: (state) => {
            state.user = null;
            state.token = '';
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signInWithUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        });
    },
});

export const {clearUser} = user.actions;

const usersReducer = (state: RootState) => state.user;

export const userToken = createSelector([usersReducer], (slice) => slice.token);
export const userData = createSelector([usersReducer], (slice) => slice.user);

export default user.reducer;
