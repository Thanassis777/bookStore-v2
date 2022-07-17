import {combineReducers} from 'redux';

import category from './categories';
import checkout from './checkout';
import user from './user';

export const rootReducer = combineReducers({
    category,
    checkout,
    user,
});
