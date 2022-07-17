import {CodeListType} from '../../shared/models/ApplicationTypes';
import {createAsyncThunk, createSelector, createSlice} from '@reduxjs/toolkit';
import {getService} from '../../api';
import {RootState} from '../index';
import {useReduxData} from '../../shared/hooks/useReduxData';

export interface CategoryError {
    message: string;
}

export interface CategoryState {
    categories: CodeListType[];
    isLoading: boolean;
    error: CategoryError;
}

export const initialState: CategoryState = {
    categories: [],
    isLoading: false,
    error: {message: ''},
};

export const loadCategories = createAsyncThunk('categoriesData', async () => {
    const response = await getService('/categories');
    return response.data;
});

const category = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.isLoading = true;
        });
    },
});

const categoriesReducer = (state: RootState) => state.category;

export const categoriesData = createSelector([categoriesReducer], (slice) => slice.categories);

export const categoriesDataLoading = createSelector(
    [categoriesReducer],
    (slice) => slice.isLoading
);

export const useCategoriesData = () => {
    return useReduxData<CodeListType[]>(categoriesData, categoriesDataLoading, loadCategories);
};

export default category.reducer;
