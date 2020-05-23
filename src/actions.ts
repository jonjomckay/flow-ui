import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { IObjectData } from './types';
import { RootState } from './store';

export const setTenant = createAction<string>('SetTenant');

// Send an initialization request to Flow
export interface InitializeFlowProps {
    flowId: {
        id: string
        versionId?: string
    }
    tenantId: string
}

export const initializeFlow = createAsyncThunk('InitializeFlow', async (payload: InitializeFlowProps, thunk) => {
    try {
        thunk.dispatch(setTenant(payload.tenantId));

        // Send the actual initialization request to Flow
        const initializeResponse: AxiosResponse = await axios.post('https://flow.boomi.com/api/run/1', payload, {
            headers: {
                'ManyWhoTenant': payload.tenantId
            }
        });

        const initializeResponseData = initializeResponse.data;

        thunk.dispatch(invokeFlow({
            currentMapElementId: initializeResponseData.currentMapElementId,
            invokeType: 'FORWARD',
            mapElementInvokeRequest: {},
            stateId: initializeResponseData.stateId,
            stateToken: initializeResponseData.stateToken
        }));
    } catch (e) {
        // TODO

        console.error(e);
    }
});

// Send an invocation request to Flow
export interface InvokeFlowProps {
    currentMapElementId: string,
    invokeType: 'FORWARD' | 'SYNC',
    mapElementInvokeRequest: any
    stateId: string
    stateToken: string
}

export const invokeFlow: any = createAsyncThunk<any, InvokeFlowProps, { state: RootState }>('InvokeFlow', async (payload, thunk) => {
    const state: RootState = thunk.getState();

    try {
        // Send the actual invocation request to Flow
        const invokeResponse = await axios.post('https://flow.boomi.com/api/run/1/state/' + payload.stateId, payload, {
            headers: {
                'ManyWhoTenant': state.state.tenantId
            }
        });

        const invokeResponseData: any = invokeResponse.data;

        // Trigger any navigation updates, if relevant
        if (invokeResponseData.navigationElementReferences && invokeResponseData.navigationElementReferences.length) {
            thunk.dispatch(loadNavigation(invokeResponse.data));
        }

        // Trigger any object data requests, if there are any components with them
        const pageResponse = invokeResponseData.mapElementInvokeResponses[0].pageResponse;

        if (pageResponse.pageComponentDataResponses) {
            pageResponse.pageComponentDataResponses
                .filter((data: any) => data.objectDataRequest)
                .forEach((data: any) => {
                    thunk.dispatch(loadObjectData({
                        objectDataRequest: data.objectDataRequest,
                        pageComponentId: data.pageComponentId
                    }));
                });
        }

        return invokeResponseData;
    } catch (e) {
        // TODO

        console.error(e);
    }
});

// TODO: This only handles the first navigation element
export interface LoadNavigationProps {
    navigationElementReferences: any[],
    stateId: string,
    stateToken: string
}

export const loadNavigation: any = createAsyncThunk<any, LoadNavigationProps, { state: RootState }>('LoadNavigation', async (payload, thunk) => {
    const state: RootState = thunk.getState();

    try {
        const request = {
            navigationElementId: payload.navigationElementReferences[0].id,
            stateId: payload.stateId,
            stateToken: payload.stateToken
        };

        // Send the actual navigation request to Flow
        const navigationResponse: AxiosResponse = await axios.post('https://flow.boomi.com/api/run/1/navigation/' + payload.stateId, request, {
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

export interface LoadObjectDataProps {
    objectDataRequest: any // TODO
    pageComponentId: string
}

export const loadObjectData = createAsyncThunk('LoadObjectData', async (payload: LoadObjectDataProps, thunk) => {
    const { objectDataRequest, pageComponentId } = payload;

    try {
        const response = await axios.post('https://flow.boomi.com/api/run/1/service/data', objectDataRequest, {
            headers: {
                'ManyWhoTenant': '1e6ba809-b1f7-4118-91c1-a5a6e7092ced'
            }
        });

        thunk.dispatch(setComponentValue({
            objectData: response.data.objectData,
            pageComponentId: pageComponentId
        }));
    } catch (e) {
        // TODO

        console.error(e);
    }
});

// Pass in an object containing the ID of the component to be refreshed
export const refreshComponent = createAction('RefreshComponent');

// Used when a page component updates its value
export interface SetComponentValueProps {
    contentValue?: string,
    objectData?: IObjectData[]
    pageComponentId: string,
    selectedOutcomeId?: string
}

export const setComponentValue: any = createAsyncThunk<any, SetComponentValueProps, { state: RootState }>('SetComponentValue', async (payload, thunk) => {
    const state = thunk.getState();

    // Always return the content value/object data for our local state, ready for the next invoke/sync
    const pageComponentInputResponse = {
        contentValue: payload.contentValue,
        objectData: payload.objectData,
        pageComponentId: payload.pageComponentId,
    };

    // We only want to perform a SYNC invocation if the changed component has events linked to it
    let component = state.page.pageComponents.find(c => c.id === payload.pageComponentId);
    if (component && !component.hasEvents) {
        return pageComponentInputResponse;
    }

    // Invoke the flow, using the given outcome ID
    thunk.dispatch(invokeFlow({
        currentMapElementId: state.state.currentMapElementId,
        invokeType: 'SYNC',
        mapElementInvokeRequest: {
            pageRequest: {
                pageComponentInputResponses: [pageComponentInputResponse]
            },
            selectedOutcomeId: payload.selectedOutcomeId
        },
        stateId: state.state.id,
        stateToken: state.state.token
    }));

    return pageComponentInputResponse;
});

// Pass in an object containing the ID of the navigation item that was selected
export interface SelectNavigationItemProps {
    itemId: string
    navigationId: string
}

export const selectNavigationItem = createAsyncThunk<any, SelectNavigationItemProps, { state: RootState }>('SelectNavigationItem', async (payload, thunk) => {
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
export interface SelectOutcomeProps {
    selectedOutcomeId: string
}

export const selectOutcome: any = createAsyncThunk<any, SelectOutcomeProps, { state: RootState }>('SelectOutcome', async (payload, thunk) => {
    const state: RootState = thunk.getState();

    const pageComponentInputResponses = Object.entries(state.page.inputs).filter(([id, input]) => input.isDirty).map(([id, input]) => {
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
