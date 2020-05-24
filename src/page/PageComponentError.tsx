import * as React from 'react';
import { ErrorInfo } from 'react';
import { IPageComponent } from '../types';
import ITheme from '../ITheme';

interface Props {
    component: IPageComponent
    theme: ITheme
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
        const { component, theme } = this.props;

        if (this.state.hasError) {
            const message = <span>Something went wrong loading the <strong>{ component.componentType }</strong> component</span>;

            const description = this.state.error
                ? this.state.error.message
                : null;

            return React.createElement(theme.alertComponent, {
                message: description,
                title: message,
                type: 'error'
            });
        }

        return this.props.children;
    }
}
