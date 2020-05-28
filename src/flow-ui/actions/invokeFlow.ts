import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import axios from 'axios';
import { addNotification, loadNavigation, loadObjectData } from './index';

export interface InvokeFlowProps {
    currentMapElementId: string;
    invokeType: 'FORWARD' | 'SYNC';
    mapElementInvokeRequest: any;
    stateId: string;
    stateToken: string;
}

// Send an invocation request to Flow
const invokeFlow: any = createAsyncThunk<any, InvokeFlowProps, { state: RootState }>('InvokeFlow', async (payload, thunk) => {
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
        if (e.response) {
            thunk.dispatch(addNotification({
                message: e.response.data,
                title: 'Oops',
                type: 'error'
            }))
        } else {
            thunk.dispatch(addNotification({
                message: e.message,
                title: 'Oops',
                type: 'error'
            }))
        }

        throw e;
    }
});

export default invokeFlow;
