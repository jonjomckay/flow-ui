import { INotification } from '../types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { removeNotification } from './index';

export type AddNotificationProps = INotification;

const addNotification = createAsyncThunk('AddNotification', async (payload: AddNotificationProps, thunk): Promise<INotification> => {
    // Generate a random key
    const key = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

    // Remove the notification after 2500ms
    setTimeout(() => {
        thunk.dispatch(removeNotification(key))
    }, 2500);

    return {
        key: key,
        message: payload.message,
        title: payload.title,
        type: payload.type
    }
});

export default addNotification;
