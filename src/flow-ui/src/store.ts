import { combineReducers } from '@reduxjs/toolkit';
import outcomeReducer, { OutcomeState } from './outcomes/outcomeReducer';
import pageReducer, { PageState } from './page/pageReducer';
import stateReducer, { StateState } from './state/stateReducer';
import navigationReducer, { NavigationState } from './navigation/navigationReducer';
import notificationReducer, { NotificationState } from './notification/notificationReducer';
import { CombinedState, Reducer } from 'redux';
import debuggerReducer, { DebuggerState } from './debugger/debuggerReducer';

export interface RootState {
    debugger: DebuggerState,
    navigation: NavigationState,
    notification: NotificationState,
    outcomes: OutcomeState,
    page: PageState,
    state: StateState,
}

export const rootReducer: Reducer<CombinedState<RootState>> = combineReducers({
    debugger: debuggerReducer,
    navigation: navigationReducer,
    notification: notificationReducer,
    outcomes: outcomeReducer,
    page: pageReducer,
    state: stateReducer
});
