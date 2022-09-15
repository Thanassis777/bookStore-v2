import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../index';

export interface LoadingState {
    isLoading: boolean;
}

export const initialState: LoadingState = {
    isLoading: false,
};

const dataLoading = createSlice({
    name: 'appLoading',
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const loadingReducer = (state: RootState) => state.dataLoading.isLoading;

export default dataLoading.reducer;
