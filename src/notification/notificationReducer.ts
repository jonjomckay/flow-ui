import { createReducer } from '@reduxjs/toolkit';
import { addNotification, removeNotification } from '../actions';
import { INotification } from '../types';

interface NotificationState {
    notifications: INotification[]
}

const initialState: NotificationState = {
    notifications: []
};

export default createReducer(initialState, builder => builder
    .addCase(addNotification.fulfilled, (state, action) => {
        return {
            ...state,
            notifications: state.notifications.concat([action.payload])
        }
    })
    .addCase(removeNotification, (state, action) => {
        return {
            ...state,
            notifications: state.notifications.filter(notification => {
                return notification.key !== action.payload
            })
        }
    })
)
