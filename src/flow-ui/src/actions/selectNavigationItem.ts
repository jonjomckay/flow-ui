import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import invokeFlow from './invokeFlow';

export interface SelectNavigationItemProps {
    itemId: string
    navigationId: string
}

// Pass in an object containing the ID of the navigation item that was selected
const selectNavigationItem = createAsyncThunk<any, SelectNavigationItemProps, { state: RootState }>('SelectNavigationItem', async (payload, thunk) => {
    const state = thunk.getState();

    // Invoke the flow, using the given navigation item
    thunk.dispatch(invokeFlow({
        currentMapElementId: state.state.currentMapElementId,
        invokeType: 'NAVIGATE',
        mapElementInvokeRequest: {},
        navigationElementId: payload.navigationId,
        selectedNavigationItemId: payload.itemId,
        stateId: state.state.id,
        stateToken: state.state.token
    }));
});

export default selectNavigationItem;
