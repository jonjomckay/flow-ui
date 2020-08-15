import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import axios, { AxiosResponse } from 'axios';

export interface LoadNavigationProps {
    navigationElementReferences: any[],
    stateId: string,
    stateToken: string
}

// TODO: This only handles the first navigation element
const loadNavigation: any = createAsyncThunk<any, LoadNavigationProps, { state: RootState }>('LoadNavigation', async (payload, thunk) => {
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
                'Authorization': state.state.authenticationToken || '',
                'ManyWhoTenant': state.state.tenantId
            }
        });

        return navigationResponse.data;
    } catch (e) {
        // TODO

        console.error(e);
    }
});

export default loadNavigation;
