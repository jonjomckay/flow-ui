import { createAction } from '@reduxjs/toolkit';

// Pass in an object containing the ID of the component to be refreshed
// TODO: Is this needed?
const refreshComponent = createAction('RefreshComponent');

export default refreshComponent;
