import { createReducer } from '@reduxjs/toolkit';
import { invokeFlow } from '../actions';

const initialState = {
    currentMapElementId: null,
    id: null,
    token: null
};

export default createReducer(initialState, {
    [invokeFlow.fulfilled]: (state, action) => {
        return {
            ...state,
            currentMapElementId: action.payload.currentMapElementId,
            id: action.payload.stateId,
            token: action.payload.stateToken
        }
    }
});
