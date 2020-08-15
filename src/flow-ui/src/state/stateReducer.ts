import { createReducer } from '@reduxjs/toolkit';
import { invokeFlow, setTenant } from '../actions';
import setState from '../actions/setState';
import setAuthenticationToken from '../actions/setAuthenticationToken';

export interface StateState {
    authenticationToken?: string;
    currentMapElementId: string | null,
    id: string | null;
    invokeResponse: any; // TODO
    isLoading: boolean
    tenantId: string | null
    token: string | null
}

const initialState: StateState = {
    currentMapElementId: null,
    id: null,
    invokeResponse: null,
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
            invokeResponse: action.payload,
            isLoading: false, // TODO: This doesn't work with multiple concurrent loading things
            token: action.payload.stateToken
        }
    })
    .addCase(invokeFlow.rejected, (state, action) => {
        return {
            ...state,
            isLoading: false
        }
    })
    .addCase(setAuthenticationToken, (state, action) => {
        return {
            ...state,
            authenticationToken: action.payload
        }
    })
    .addCase(setState, (state, action) => {
        return {
            ...state,
            id: action.payload
        }
    })
    .addCase(setTenant, (state, action) => {
        return {
            ...state,
            tenantId: action.payload
        }
    })
);
