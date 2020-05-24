import { createReducer } from '@reduxjs/toolkit';
import { invokeFlow, loadObjectData, selectOutcome, setComponentValue } from '../actions';
import { IPageComponent, IPageContainer, IPageInput } from '../types';

interface PageState {
    inputs: { [key: string]: IPageInput },
    pageComponents: IPageComponent[],
    pageContainers: IPageContainer[]
}

const initialState: PageState = {
    inputs: {},
    pageComponents: [],
    pageContainers: []
};

export default createReducer(initialState, builder => builder
    .addCase(invokeFlow.fulfilled, (state, action) => {
        const pageResponse = action.payload.mapElementInvokeResponses[0].pageResponse;

        // If we're SYNCing, we're only sent the component data, so match it up with the components we have in the state
        const currentPageComponents = pageResponse.pageComponentResponses
            ? pageResponse.pageComponentResponses
            : state.pageComponents;

        const pageComponents: IPageComponent[] = currentPageComponents.map((component: any) => {
            return {
                ...component,
                data: pageResponse.pageComponentDataResponses.find((data: any) => data.pageComponentId === component.id)
            }
        });

        // If we're SYNCing, we're only sent the container data, so match it up with the containers we have in the state
        const currentPageContainers = pageResponse.pageContainerResponses
            ? pageResponse.pageContainerResponses
            : state.pageContainers;

        const pageContainers: IPageContainer[] = currentPageContainers.map((container: any) => {
            return {
                ...container,
                data: pageResponse.pageContainerDataResponses.find((data: any) => data.pageContainerId === container.id)
            }
        });

        // TODO: Clear if the map element ID is different
        const inputs = { ...state.inputs };

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
    })
    .addCase(loadObjectData.fulfilled, (state, action) => {
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
    })
    .addCase(loadObjectData.pending, (state, action) => {
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
    })
    .addCase(selectOutcome.fulfilled, (state, action) => {
        // Clear any input values from the previous page
        return {
            ...state,
            inputs: initialState.inputs
        }
    })
    .addCase(setComponentValue.fulfilled, (state, action) => {
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
    })
);
