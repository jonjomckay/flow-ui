import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import setComponentLoading from './setComponentLoading';
import setComponentValue from './setComponentValue';
import { RootState } from '../store';
import { InvokeFlowProps } from './invokeFlow';

export interface LoadInvokerRequestsProps {

}

const loadInvokerRequests = createAsyncThunk<any, LoadInvokerRequestsProps, { state: RootState }>('LoadInvokerRequests', async (payload: LoadInvokerRequestsProps, thunk) => {
    const { state } = thunk.getState();
    const { } = payload;

    // thunk.dispatch(setComponentLoading({
    //     isLoading: true,
    //     pageComponentId: pageComponentId
    // }));

    try {
        // TODO: Store this in the store
        const params = new URLSearchParams(window.location.search);

        const response = await axios.get('https://flow.boomi.com/api/service/1/requests/state/' + state.id, {
            headers: {
                'Authorization': params.get('user-token'),
                'ManyWhoTenant': state.tenantId
            }
        });

        // console.log(response.data);

        return response.data;

        // thunk.dispatch(setComponentValue({
        //     objectData: response.data.objectData,
        //     pageComponentId: pageComponentId
        // }));
    } catch (e) {
        // TODO

        console.error(e);
    } finally {
        // thunk.dispatch(setComponentLoading({
        //     isLoading: false,
        //     pageComponentId: pageComponentId
        // }));
    }
});

export default loadInvokerRequests;
