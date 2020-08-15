import * as React from 'react';
import { ITheme } from '../index';

export function renderPageComponent(theme: ITheme, componentType: string, props: any): React.ReactNode {
    const componentComponent = theme.components[componentType.toUpperCase()];
    if (componentComponent) {
        return React.createElement(componentComponent, props);
    }

    // We can't map the container type to a container in the theme
    console.warn('The component type ' + componentType + ' is not supported');

    const message = <span>The component type <strong>{ componentType }</strong> is not supported</span>;

    return React.createElement(theme.alertComponent, {
        message: message,
        title: 'Unknown component',
        type: 'warning'
    });
}
