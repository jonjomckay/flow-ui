import { createReducer } from '@reduxjs/toolkit';
import { invokeFlow, loadObjectData, selectOutcome, setComponentValue } from '../actions';

const initialState = {
    inputs: {},
    pageComponents: [],
    pageContainers: []
};

export default createReducer(initialState, {
    [invokeFlow.fulfilled]: (state, action) => {
        const pageResponse = action.payload.mapElementInvokeResponses[0].pageResponse;

        // If we're SYNCing, we're only sent the component data, so match it up with the components we have in the state
        let currentPageComponents = pageResponse.pageComponentResponses
            ? pageResponse.pageComponentResponses
            : state.pageComponents;

        const pageComponents = currentPageComponents.map(component => {
            return {
                ...component,
                data: pageResponse.pageComponentDataResponses.find(data => data.pageComponentId === component.id)
            }
        });

        // If we're SYNCing, we're only sent the container data, so match it up with the containers we have in the state
        let currentPageContainers = pageResponse.pageContainerResponses
            ? pageResponse.pageContainerResponses
            : state.pageContainers;

        const pageContainers = currentPageContainers.map(container => {
            return {
                ...container,
                data: pageResponse.pageContainerDataResponses.find(data => data.pageContainerId === container.id)
            }
        });

        // TODO: Clear if the map element ID is different
        let inputs = { ...state.inputs };

        pageComponents.forEach(component => {
            inputs[component.id] = {
                ...inputs[component.id],
                isDirty: false,
                contentValue: component.data.contentValue,
                objectData: component.data.objectData
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
    [loadObjectData.fulfilled]: (state, action) => {
        return {
            ...state,
            inputs: {
                ...state.inputs,
                [action.meta.arg.pageComponentId]: {
                    ...state.inputs[action.meta.arg.pageComponentId],
                    isLoading: false
                }
            }
        }
    },
    [loadObjectData.pending]: (state, action) => {
        return {
            ...state,
            inputs: {
                ...state.inputs,
                [action.meta.arg.pageComponentId]: {
                    ...state.inputs[action.meta.arg.pageComponentId],
                    isLoading: true
                }
            }
        }
    },
    [selectOutcome.fulfilled]: (state, action) => {
        // Clear any input values from the previous page
        return {
            ...state,
            inputs: initialState.inputs
        }
    },
    [setComponentValue.fulfilled]: (state, action) => {
        return {
            ...state,
            inputs: {
                ...state.inputs,
                [action.payload.pageComponentId]: {
                    ...[action.payload.pageComponentId],
                    isDirty: true,
                    contentValue: action.payload.contentValue,
                    objectData: action.payload.objectData
                }
            }
        }
    }
});
