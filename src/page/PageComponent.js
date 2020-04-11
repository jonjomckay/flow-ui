import React from 'react';
import Presentation from './components/Presentation';

const PageComponent = ({ component }) => {
    const { componentType } = component;

    const props = {
        component: component
    };

    switch (componentType) {
        case 'PRESENTATION':
            return <Presentation { ...props } />;
        default:
            console.warn('The component type ' + componentType + ' is not supported');
            return null;
    }
};

export default PageComponent;
