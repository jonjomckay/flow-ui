import { createAction } from '@reduxjs/toolkit';

const removeNotification = createAction<string>('RemoveNotification');

export default removeNotification;
