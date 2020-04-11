import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Send an initialization request to Flow
export const initializeFlow = createAsyncThunk('InitializeFlow', async (payload, thunk) => {
    try {
        // Send the actual initialization request to Flow
        const initializeResponse = await axios.post('https://flow.boomi.com/api/run/1', payload, {
            headers: {
                'ManyWhoTenant': '07f799a4-af7c-449b-ba7c-f1f526f7000a'
            }
        });

        thunk.dispatch(invokeFlow({
            currentMapElementId: initializeResponse.data.currentMapElementId,
            invokeType: 'FORWARD',
            mapElementInvokeRequest: {},
            stateId: initializeResponse.data.stateId,
            stateToken: initializeResponse.data.stateToken
        }));
    } catch (e) {
        // TODO

        console.error(e);
    }
});

// Send an invocation request to Flow
export const invokeFlow = createAsyncThunk('InvokeFlow', async (payload, thunk) => {
    try {
        // Send the actual invocation request to Flow
        const invokeResponse = await axios.post('https://flow.boomi.com/api/run/1/state/' + payload.stateId, payload, {
            headers: {
                'ManyWhoTenant': '07f799a4-af7c-449b-ba7c-f1f526f7000a'
            }
        });

        return invokeResponse.data;
    } catch (e) {
        // TODO

        console.error(e);
    }
});

// Pass in an object containing the ID of the component to be refreshed
export const refreshComponent = createAction('RefreshComponent');

// Pass in an object containing the ID of the navigation item that was selected
export const selectNavigationItem = createAction('SelectNavigationItem');

// Pass in an object containing the ID of the outcome that was selected
export const selectOutcome = createAsyncThunk('SelectOutcome', async (payload, thunk) => {
    const state = thunk.getState();

    // Invoke the flow, using the given outcome ID
    thunk.dispatch(invokeFlow({
        currentMapElementId: state.state.currentMapElementId,
        invokeType: 'FORWARD',
        mapElementInvokeRequest: {
            selectedOutcomeId: payload.selectedOutcomeId
        },
        stateId: state.state.id,
        stateToken: state.state.token
    }));
});
