import React from 'react';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import addNotification from './addNotification';
import loadNavigation from './loadNavigation';
import loadObjectData from './loadObjectData';

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

        // Display a notification for any root faults
        const mapElementInvokeResponse = invokeResponseData.mapElementInvokeResponses[0];
        if (mapElementInvokeResponse.rootFaults) {
            Object.entries<string>(mapElementInvokeResponse.rootFaults).forEach(([, value]) => {
                // TODO: Is this always JSON?
                const fault = JSON.parse(value);

                const message = (
                    <p>
                        The service endpoint <strong>{ fault.uri }</strong> returned an error with the status code <strong>{ fault.statusCode }</strong> and the message <strong>{ fault.message }</strong>.
                    </p>
                )

                thunk.dispatch(addNotification({
                    message: message,
                    title: 'Oops',
                    type: 'error'
                }))
            });
        }

        // Trigger any object data requests, if there are any components with them
        const pageResponse = mapElementInvokeResponse.pageResponse;

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
