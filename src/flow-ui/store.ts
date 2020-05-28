import { combineReducers } from '@reduxjs/toolkit';
import outcomeReducer from './outcomes/outcomeReducer';
import pageReducer from './page/pageReducer';
import stateReducer from './state/stateReducer';
import navigationReducer from './navigation/navigationReducer';
import notificationReducer from './notification/notificationReducer';

export const rootReducer = combineReducers({
    navigation: navigationReducer,
    notification: notificationReducer,
    outcomes: outcomeReducer,
    page: pageReducer,
    state: stateReducer
});

export type RootState = ReturnType<typeof rootReducer>;
