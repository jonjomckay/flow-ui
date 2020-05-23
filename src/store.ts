import { combineReducers } from '@reduxjs/toolkit';
import outcomeReducer from './outcomes/outcomeReducer';
import pageReducer from './page/pageReducer';
import stateReducer from './state/stateReducer';
import navigationReducer from './navigation/navigationReducer';

export const rootReducer = combineReducers({
    navigation: navigationReducer,
    outcomes: outcomeReducer,
    page: pageReducer,
    state: stateReducer
});

export type RootState = ReturnType<typeof rootReducer>;
