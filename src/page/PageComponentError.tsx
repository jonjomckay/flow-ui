import * as React from 'react';
import { ErrorInfo } from 'react';
import { Alert } from 'antd';
import { IPageComponent } from '../types';

interface Props {
    component: IPageComponent
}

interface State {
    error: any,
    hasError: boolean
}

export default class PageComponentError extends React.Component<Props, State> {
    state: State = {
        error: null,
        hasError: false
    }

    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI
        return {
            error: error,
            hasError: true
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // TODO: You can also log the error to an error reporting service
    }

    render() {
        const { component } = this.props;

        if (this.state.hasError) {
            const message = <span>Something went wrong loading the <strong>{ component.componentType }</strong> component</span>;

            const description = this.state.error
                ? this.state.error.message
                : null;

            return (
                <Alert description={ description } message={  message }  type="error" showIcon />
            )
        }

        return this.props.children;
    }
}
