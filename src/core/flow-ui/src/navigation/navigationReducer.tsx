import { createReducer } from '@reduxjs/toolkit';
import { invokeFlow, loadNavigation } from '../actions';
import { INavigationItem } from '../types';
import { FlowNavigationResponse } from '../types/FlowNavigationResponse';
import INavigationItemData from '../types/INavigationItemData';

export interface NavigationState {
    id: string;
    items: INavigationItem[];
    navigation: FlowNavigationResponse | null;
}

const initialState: NavigationState = {
    id: '',
    items: [],
    navigation: null
};

export default createReducer(initialState, builder => builder
    .addCase(invokeFlow.fulfilled, (state, action) => {
        if (action.payload && action.payload.navigationElementReferences && action.payload.navigationElementReferences.length) {
            return {
                ...state,
                id: action.payload.navigationElementReferences[0].id
            }
        }

        return state;
    })
    .addCase(loadNavigation.fulfilled, (state, action) => {
        const items = action.payload.navigationItemResponses.map((item: INavigationItem) => {
            return {
                ...item,
                data: action.payload.navigationItemDataResponses.find((data: INavigationItemData) => data.navigationItemId === item.id)
            }
        });

        return {
            ...state,
            items: items,
            navigation: action.payload
        }
    })
);
