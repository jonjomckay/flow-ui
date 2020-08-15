import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import invokeFlow from './invokeFlow';
import setTenant from './setTenant';
import { setState } from './index';
import setAuthenticationToken from './setAuthenticationToken';

export interface InitializeFlowProps {
    flowId: {
        id: string
        versionId?: string | null
    }
    mode?: string;
    sessionToken?: string;
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

        thunk.dispatch(setState(initializeResponseData.stateId));

        // If we're given a session token, authenticate against the state with it
        let authenticationToken;
        if (payload.sessionToken) {
            try {
                const authenticateResponse = await axios.post('http://flow.boomi.com/api/run/1/authentication/' + initializeResponseData.stateId, {
                    sessionToken: payload.sessionToken
                }, {
                    headers: {
                        'ManyWhoTenant': payload.tenantId
                    }
                });

                authenticationToken = authenticateResponse.data;
            } catch (e) {
                // TODO
                console.error(e);
            }

            // Put the token in the store
            thunk.dispatch(setAuthenticationToken(authenticationToken));
        }

        thunk.dispatch(invokeFlow({
            authenticationToken: authenticationToken,
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
