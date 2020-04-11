import { createReducer } from '@reduxjs/toolkit';
import { invokeFlow } from '../actions';

const initialState = {
    outcomes: []
};

export default createReducer(initialState, {
    [invokeFlow.fulfilled]: (state, action) => {
        console.log(action);

        // Set the outcomes from the invoke response into the current state
        return {
            ...state,
            outcomes: action.payload.mapElementInvokeResponses[0].outcomeResponses
        }
    }
});
