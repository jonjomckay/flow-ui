import { createReducer } from '@reduxjs/toolkit';
import loadInvokerRequests from '../actions/loadInvokerRequests';

export interface DebuggerState {
    requests: [];
}

const initialState: DebuggerState = {
    requests: []
};

export default createReducer(initialState, builder => builder
    .addCase(loadInvokerRequests.fulfilled, (state, action) => {
        return {
            ...state,
            requests: action.payload.items
        }
    })
);
