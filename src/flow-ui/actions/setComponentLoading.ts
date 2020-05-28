import { createAction } from '@reduxjs/toolkit';

export interface SetComponentLoadingProps {
    isLoading: boolean,
    pageComponentId: string
}

export default createAction<SetComponentLoadingProps>('SetComponentLoading');
