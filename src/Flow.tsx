import * as React from 'react';
import { Provider } from 'react-redux';
import { rootReducer } from './store';
import App from './App';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';

interface Props {
    id: string
    tenant: string
    version: string | null
}

export default class Flow extends React.Component<Props> {
    store: EnhancedStore;

    constructor(props: any) {
        super(props);

        this.store = configureStore({
            reducer: rootReducer
        });
    }

    render() {
        return (
            <React.StrictMode>
                <Provider store={ this.store }>
                    <App { ...this.props } />
                </Provider>
            </React.StrictMode>
        )
    }
}
