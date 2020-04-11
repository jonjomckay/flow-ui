import React from 'react';
import { Alert } from 'antd';
import Presentation from './components/Presentation';
import Input from './components/Input';

const PageComponent = ({ component }) => {
    const { componentType } = component;

    const props = {
        component: component
    };

    switch (componentType) {
        case 'INPUT':
            return <Input { ...props } />;
        case 'PRESENTATION':
            return <Presentation { ...props } />;
        default:
            console.warn('The component type ' + componentType + ' is not supported');

            const message = <span>Unknown component type <strong>{ componentType }</strong></span>;

            return <Alert message={ message } type="warning" showIcon />;
    }
};

export default PageComponent;
