import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setComponentValue } from './index';

export interface LoadObjectDataProps {
    objectDataRequest: any // TODO
    pageComponentId: string
}

const loadObjectData = createAsyncThunk('LoadObjectData', async (payload: LoadObjectDataProps, thunk) => {
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

export default loadObjectData;
