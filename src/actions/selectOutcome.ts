import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { invokeFlow } from '../actions';

export interface SelectOutcomeProps {
    selectedOutcomeId: string
}

// Pass in an object containing the ID of the outcome that was selected, sending all the current page's input values
const selectOutcome: any = createAsyncThunk<any, SelectOutcomeProps, { state: RootState }>('SelectOutcome', async (payload, thunk) => {
    const state: RootState = thunk.getState();

    const pageComponentInputResponses = Object.entries(state.page.inputs).filter(([id, input]) => input.isDirty).map(([id, input]) => {
        return {
            contentValue: input.contentValue,
            objectData: input.objectData,
            pageComponentId: id,
        }
    });

    // Invoke the flow, using the given outcome ID
    thunk.dispatch(invokeFlow({
        currentMapElementId: state.state.currentMapElementId,
        invokeType: 'FORWARD',
        mapElementInvokeRequest: {
            pageRequest: {
                pageComponentInputResponses: pageComponentInputResponses
            },
            selectedOutcomeId: payload.selectedOutcomeId
        },
        stateId: state.state.id,
        stateToken: state.state.token
    }));
});

export default selectOutcome;
