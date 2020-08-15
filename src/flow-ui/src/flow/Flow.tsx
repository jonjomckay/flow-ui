import * as React from 'react';
import { Provider } from 'react-redux';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { rootReducer } from '../store';
import FlowContent from './FlowContent';
import { ITheme } from '../index';
import './Flow.less';

interface Props {
    id: string;
    mode?: string;
    sessionToken?: string;
    tenant: string
    theme: ITheme;
    version?: string | null
}

export default class Flow extends React.Component<Props> {
    store: EnhancedStore;

    constructor(props: Props) {
        super(props);

        this.store = configureStore({
            reducer: rootReducer
        });
    }

    render() {
        return (
            <React.StrictMode>
                <Provider store={ this.store }>
                    <FlowContent { ...this.props } />
                </Provider>
            </React.StrictMode>
        )
    }
}
