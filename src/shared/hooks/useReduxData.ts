import {RootState} from '../../store';
import {AsyncThunkAction} from '@reduxjs/toolkit';
import {useAppDispatch, useAppSelector} from '../../store/storeHooks';
import {useEffect} from 'react';

export const useReduxData = <T>(
    reduxDataSelector: (state: RootState) => T,
    reduxDataLoadedSelector: (state: RootState) => boolean,
    actionToDispatch: () => AsyncThunkAction<any, any, any>
): [T, boolean] => {
    const dispatch = useAppDispatch();

    const dataLoaded = useAppSelector(reduxDataLoadedSelector);
    const data = useAppSelector(reduxDataSelector);

    useEffect(() => {
        if (!dataLoaded) dispatch(actionToDispatch());
    }, [dispatch, dataLoaded]);

    return [data, dataLoaded];
};
