import { createReducer } from '@reduxjs/toolkit';
import { invokeFlow, selectOutcome, setComponentValue } from '../actions';

const initialState = {
    inputs: {},
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

        // TODO: Clear if the map element ID is different
        let inputs = { ...state.inputs };

        pageComponents.forEach(component => {
            inputs[component.id] = {
                isDirty: false,
                value: component.data.contentValue
            }
        });

        // Set the page response from the invoke response into the current state
        return {
            ...state,
            inputs: inputs,
            pageComponents: pageComponents,
            pageContainers: pageContainers
        }
    },
    [selectOutcome.fulfilled]: (state, action) => {
        // Clear any input values from the previous page
        return {
            ...state,
            inputs: initialState.inputs
        }
    },
    [setComponentValue]: (state, action) => {
        return {
            ...state,
            inputs: {
                ...state.inputs,
                [action.payload.id]: {
                    isDirty: true,
                    contentValue: action.payload.contentValue
                }
            }
        }
    }
});
