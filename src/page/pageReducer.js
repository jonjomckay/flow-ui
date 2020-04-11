import { createReducer } from '@reduxjs/toolkit';
import { invokeFlow } from '../actions';

const initialState = {
    pageComponents: [],
    pageContainers: []
};

export default createReducer(initialState, {
    [invokeFlow.fulfilled]: (state, action) => {
        const pageComponents = action.payload.mapElementInvokeResponses[0].pageResponse.pageComponentResponses.map(component => {
            return {
                ...component,
                data: action.payload.mapElementInvokeResponses[0].pageResponse.pageComponentDataResponses.find(data => data.pageComponentId === component.id)
            }
        });

        const pageContainers = action.payload.mapElementInvokeResponses[0].pageResponse.pageContainerResponses.map(container => {
            return {
                ...container,
                data: action.payload.mapElementInvokeResponses[0].pageResponse.pageContainerDataResponses.find(data => data.pageContainerId === container.id)
            }
        });

        // Set the page response from the invoke response into the current state
        return {
            ...state,
            pageComponents: pageComponents,
            pageContainers: pageContainers
        }
    }
});
