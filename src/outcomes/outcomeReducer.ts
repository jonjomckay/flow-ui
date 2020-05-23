import { createReducer } from '@reduxjs/toolkit';
import { invokeFlow } from '../actions';
import { IOutcome } from '../types';

interface OutcomeState {
    outcomes: IOutcome[]
}

const initialState: OutcomeState = {
    outcomes: []
};

export default createReducer(initialState, builder => builder
    .addCase(invokeFlow.fulfilled, (state, action) => {
        // Set the outcomes from the invoke response into the current state
        return {
            ...state,
            outcomes: action.payload.mapElementInvokeResponses[0].outcomeResponses
        }
    })
);
