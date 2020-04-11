import { createReducer } from '@reduxjs/toolkit';
import { invokeFlow, loadNavigation } from '../actions';

const initialState = {
    id: null,
    navigation: null,
    items: []
};

export default createReducer(initialState, {
    [invokeFlow.fulfilled]: (state, action) => {
        if (action.payload.navigationElementReferences && action.payload.navigationElementReferences.length) {
            return {
                ...state,
                id: action.payload.navigationElementReferences[0].id
            }
        }

        return state;
    },
    [loadNavigation.fulfilled]: (state, action) => {
        const items = action.payload.navigationItemResponses.map(item => {
            return {
                ...item,
                data: action.payload.navigationItemDataResponses.find(data => data.navigationItemId === item.id)
            }
        });

        return {
            ...state,
            navigation: action.payload,
            items: items
        }
    }
});
