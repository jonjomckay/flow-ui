import { combineReducers, configureStore } from '@reduxjs/toolkit';
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

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
    reducer: rootReducer
});
