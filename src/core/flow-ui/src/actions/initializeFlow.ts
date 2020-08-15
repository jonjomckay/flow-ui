import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import invokeFlow from './invokeFlow';
import setTenant from './setTenant';

export interface InitializeFlowProps {
    flowId: {
        id: string
        versionId?: string | null
    }
    tenantId: string
}

// Send an initialization request to Flow
const initializeFlow = createAsyncThunk('InitializeFlow', async (payload: InitializeFlowProps, thunk) => {
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

export default initializeFlow;
