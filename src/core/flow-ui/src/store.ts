import { combineReducers } from '@reduxjs/toolkit';
import outcomeReducer, { OutcomeState } from './outcomes/outcomeReducer';
import pageReducer, { PageState } from './page/pageReducer';
import stateReducer, { StateState } from './state/stateReducer';
import navigationReducer, { NavigationState } from './navigation/navigationReducer';
import notificationReducer, { NotificationState } from './notification/notificationReducer';
import { CombinedState, Reducer } from 'redux';

export interface RootState {
    navigation: NavigationState,
    notification: NotificationState,
    outcomes: OutcomeState,
    page: PageState,
    state: StateState,
}

export const rootReducer: Reducer<CombinedState<RootState>> = combineReducers({
    navigation: navigationReducer,
    notification: notificationReducer,
    outcomes: outcomeReducer,
    page: pageReducer,
    state: stateReducer
});
