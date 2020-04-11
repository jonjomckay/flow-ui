import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import outcomeReducer from './outcomes/outcomeReducer';
import pageReducer from './page/pageReducer';
import stateReducer from './state/stateReducer';
import navigationReducer from './navigation/navigationReducer';

const rootReducer = combineReducers({
    navigation: navigationReducer,
    outcomes: outcomeReducer,
    page: pageReducer,
    state: stateReducer
});

export const store = configureStore({
    reducer: rootReducer
});
