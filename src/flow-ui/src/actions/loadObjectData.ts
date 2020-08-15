import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import setComponentLoading from './setComponentLoading';
import setComponentValue from './setComponentValue';
import loadInvokerRequests from './loadInvokerRequests';
import { RootState } from '../store';

export interface LoadObjectDataProps {
    objectDataRequest: any // TODO
    pageComponentId: string
}

const loadObjectData = createAsyncThunk<any, LoadObjectDataProps, { state: RootState }>('LoadObjectData', async (payload: LoadObjectDataProps, thunk) => {
    const { objectDataRequest, pageComponentId } = payload;
    const { state } = thunk.getState();

    thunk.dispatch(setComponentLoading({
        isLoading: true,
        pageComponentId: pageComponentId
    }));

    try {
        const response = await axios.post('https://flow.boomi.com/api/run/1/service/data', objectDataRequest, {
            headers: {
                'Authorization': state.authenticationToken || '',
                'ManyWhoTenant': state.tenantId
            }
        });

        thunk.dispatch(setComponentValue({
            objectData: response.data.objectData,
            pageComponentId: pageComponentId
        }));
    } catch (e) {
        // TODO

        console.error(e);
    } finally {
        thunk.dispatch(setComponentLoading({
            isLoading: false,
            pageComponentId: pageComponentId
        }));

        thunk.dispatch(loadInvokerRequests({

        }));
    }
});

export default loadObjectData;
