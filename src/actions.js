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

        const invokeResponseData = invokeResponse.data;

        // Trigger any navigation updates, if relevant
        if (invokeResponseData.navigationElementReferences) {
            thunk.dispatch(loadNavigation(invokeResponse.data));
        }

        return invokeResponseData;
    } catch (e) {
        // TODO

        console.error(e);
    }
});

// TODO: This only handles the first navigation element
export const loadNavigation = createAsyncThunk('LoadNavigation', async (payload, thunk) => {
    try {
        const request = {
            navigationElementId: payload.navigationElementReferences[0].id,
            stateId: payload.stateId,
            stateToken: payload.stateToken
        };

        // Send the actual navigation request to Flow
        const navigationResponse = await axios.post('https://flow.boomi.com/api/run/1/navigation/' + payload.stateId, request, {
            headers: {
                'ManyWhoTenant': '07f799a4-af7c-449b-ba7c-f1f526f7000a'
            }
        });

        return navigationResponse.data;
    } catch (e) {
        // TODO

        console.error(e);
    }
});

// Pass in an object containing the ID of the component to be refreshed
export const refreshComponent = createAction('RefreshComponent');

// Pass in an object containing the ID of the navigation item that was selected
export const selectNavigationItem = createAsyncThunk('SelectNavigationItem', async (payload, thunk) => {
    const state = thunk.getState();

    // Invoke the flow, using the given navigation item
    thunk.dispatch(invokeFlow({
        currentMapElementId: state.state.currentMapElementId,
        invokeType: 'NAVIGATE',
        mapElementInvokeRequest: {},
        navigationElementId: payload.navigationId,
        selectedNavigationItemId: payload.itemId,
        stateId: state.state.id,
        stateToken: state.state.token
    }));
});

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
