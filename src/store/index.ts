import {persistReducer, persistStore} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

import {rootReducer} from './rootReducer';
import {configureStore} from '@reduxjs/toolkit';

const persistConfig = {
    key: 'root',
    storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    // devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
