import { IObjectData } from '../types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import invokeFlow from './invokeFlow';

export interface SetComponentValueProps {
    contentValue?: string,
    objectData?: IObjectData[]
    pageComponentId: string,
    selectedOutcomeId?: string
}

// Used when a page component updates its value
const setComponentValue: any = createAsyncThunk<any, SetComponentValueProps, { state: RootState }>('SetComponentValue', async (payload, thunk) => {
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

export default setComponentValue;
