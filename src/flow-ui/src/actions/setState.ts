import { createAction } from '@reduxjs/toolkit';

const setState = createAction<string>('SetState');

export default setState;
