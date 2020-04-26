import { combineReducers } from 'redux';
import { table } from './table';
import { filter } from './filter';
import { navigation } from './navigation';

export const rootReducer = combineReducers({ table, filter, navigation });
