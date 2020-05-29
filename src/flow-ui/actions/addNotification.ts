import { INotification } from '../types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { removeNotification } from './index';
import React from 'react';

export interface AddNotificationProps {
    duration?: number;
    message: string | React.ReactElement;
    title: string;
    type: 'success' | 'info' | 'error' | 'warning';
}

const addNotification = createAsyncThunk('AddNotification', async (payload: AddNotificationProps, thunk): Promise<INotification> => {
    // Generate a random key
    const key = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

    // Remove the notification after the specified duration
    if (payload.duration) {
        setTimeout(() => {
            thunk.dispatch(removeNotification(key))
        }, payload.duration);
    }

    return {
        key: key,
        message: payload.message,
        title: payload.title,
        type: payload.type
    }
});

export default addNotification;
