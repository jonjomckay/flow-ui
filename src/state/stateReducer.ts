import { createReducer } from '@reduxjs/toolkit';
import { invokeFlow, setTenant } from '../actions';

interface StateState {
    currentMapElementId: string | null,
    id: string | null
    isLoading: boolean
    tenantId: string | null
    token: string | null
}

const initialState: StateState = {
    currentMapElementId: null,
    id: null,
    isLoading: false,
    tenantId: null,
    token: null
};

export default createReducer(initialState, builder => builder
    .addCase(invokeFlow.pending, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    })
    .addCase(invokeFlow.fulfilled, (state, action) => {
        return {
            ...state,
            currentMapElementId: action.payload.currentMapElementId,
            id: action.payload.stateId,
            isLoading: false, // TODO: This doesn't work with multiple concurrent loading things
            token: action.payload.stateToken
        }
    })
    .addCase(setTenant, (state, action) => {
        return {
            ...state,
            tenantId: action.payload
        }
    })
);
