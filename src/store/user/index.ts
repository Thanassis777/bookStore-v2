import {RootState} from '../index';
import {createAsyncThunk, createSelector, createSlice} from '@reduxjs/toolkit';
import {postService} from '../../api';
import {ILogin, SignInProps} from '../../pages/Login/formModel';

export interface UserState {
    user: {
        name: string;
        email: string;
    };
    token: string;
    isLoggedIn: boolean;
}

export const initialState: UserState = {
    user: {
        name: '',
        email: '',
    },
    token: '',
    isLoggedIn: false,
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
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signInWithUser.fulfilled, (state, action) => {
            state.user = {
                name: action.payload.user.name,
                email: action.payload.user.email,
            };
            state.token = action.payload.token;
            state.isLoggedIn = true;
        });
        builder.addCase(signUpUser.fulfilled, (state, action) => {
            state.user = {
                name: action.payload.user.name,
                email: action.payload.user.email,
            };
            state.token = action.payload.token;
            state.isLoggedIn = true;
        });
    },
});

const usersReducer = (state: RootState) => state.user;

export const userToken = createSelector([usersReducer], (slice) => slice.token);
export const userData = createSelector([usersReducer], (slice) => slice.user);

export default user.reducer;
