import { createReducer } from '@reduxjs/toolkit';
import { invokeFlow } from '../actions';

const initialState = {
    currentMapElementId: null,
    id: null,
    isLoading: false,
    token: null
};

export default createReducer(initialState, {
    [invokeFlow.pending]: (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    },
    [invokeFlow.fulfilled]: (state, action) => {
        return {
            ...state,
            currentMapElementId: action.payload.currentMapElementId,
            id: action.payload.stateId,
            isLoading: false, // TODO: This doesn't work with multiple concurrent loading things
            token: action.payload.stateToken
        }
    }
});
