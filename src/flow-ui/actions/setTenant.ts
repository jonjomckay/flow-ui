import { createAction } from '@reduxjs/toolkit';

const setTenant = createAction<string>('SetTenant');

export default setTenant;
