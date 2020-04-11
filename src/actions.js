import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const setTenant = createAction('SetTenant');

// Send an initialization request to Flow
export const initializeFlow = createAsyncThunk('InitializeFlow', async (payload, thunk) => {
    try {
        thunk.dispatch(setTenant(payload.tenantId));

        // Send the actual initialization request to Flow
        const initializeResponse = await axios.post('https://flow.boomi.com/api/run/1', payload, {
            headers: {
                'ManyWhoTenant': payload.tenantId
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
    const state = thunk.getState();

    try {
        // Send the actual invocation request to Flow
        const invokeResponse = await axios.post('https://flow.boomi.com/api/run/1/state/' + payload.stateId, payload, {
            headers: {
                'ManyWhoTenant': state.state.tenantId
            }
        });

        const invokeResponseData = invokeResponse.data;

        // Trigger any navigation updates, if relevant
        if (invokeResponseData.navigationElementReferences && invokeResponseData.navigationElementReferences.length) {
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
    const state = thunk.getState();

    try {
        const request = {
            navigationElementId: payload.navigationElementReferences[0].id,
            stateId: payload.stateId,
            stateToken: payload.stateToken
        };

        // Send the actual navigation request to Flow
        const navigationResponse = await axios.post('https://flow.boomi.com/api/run/1/navigation/' + payload.stateId, request, {
            headers: {
                'ManyWhoTenant': state.state.tenantId
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

// Used when a page component updates its value
export const setComponentValue = createAction('SetComponentValue');

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

// Pass in an object containing the ID of the outcome that was selected, sending all the current page's input values
export const selectOutcome = createAsyncThunk('SelectOutcome', async (payload, thunk) => {
    const state = thunk.getState();

    const pageComponentInputResponses = Object.entries(state.page.inputs).map(([id, input]) => {
        return {
            contentValue: input.contentValue,
            objectData: input.objectData,
            pageComponentId: id,
        }
    });

    // Invoke the flow, using the given outcome ID
    thunk.dispatch(invokeFlow({
        currentMapElementId: state.state.currentMapElementId,
        invokeType: 'FORWARD',
        mapElementInvokeRequest: {
            pageRequest: {
                pageComponentInputResponses: pageComponentInputResponses
            },
            selectedOutcomeId: payload.selectedOutcomeId
        },
        stateId: state.state.id,
        stateToken: state.state.token
    }));
});
