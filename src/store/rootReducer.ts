import {combineReducers} from 'redux';

import category from './categories';
import checkout from './checkout';
import dataLoading from './dataLoading';
import user from './user';

export const rootReducer = combineReducers({
    category,
    checkout,
    user,
    dataLoading,
});
