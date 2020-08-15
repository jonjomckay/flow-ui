import { createAction } from '@reduxjs/toolkit';

const setAuthenticationToken = createAction<string>('SetAuthenticationToken');

export default setAuthenticationToken;
