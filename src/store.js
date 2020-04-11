import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import outcomeReducer from './outcomes/outcomeReducer';
import pageReducer from './page/pageReducer';
import stateReducer from './state/stateReducer';

const rootReducer = combineReducers({
    outcomes: outcomeReducer,
    page: pageReducer,
    state: stateReducer
});

export const store = configureStore({
    reducer: rootReducer
});
