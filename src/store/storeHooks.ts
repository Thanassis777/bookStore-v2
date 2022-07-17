import {AppDispatch, RootState} from './index';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {Action, ThunkAction} from '@reduxjs/toolkit';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
