import React from 'react';
import { Alert } from 'antd';
import Presentation from './components/Presentation';
import Input from './components/Input';
import { connect } from 'react-redux';
import { setComponentValue } from '../actions';
import Textarea from './components/Textarea';

const PageComponent = ({ component, setComponentValue }) => {
    const { componentType } = component;

    const onChange = (value) => {
        setComponentValue({
            id: component.id,
            contentValue: value
        });
    };

    const props = {
        component: component,
        onChange: onChange
    };

    switch (componentType) {
        case 'INPUT':
            return <Input { ...props } />;
        case 'PRESENTATION':
            return <Presentation { ...props } />;
        case 'TEXTAREA':
            return <Textarea { ...props } />;
        default:
            console.warn('The component type ' + componentType + ' is not supported');

            const message = <span>Unknown component type <strong>{ componentType }</strong></span>;

            return <Alert message={ message } type="warning" showIcon />;
    }
};

const mapDispatchToProps = ({
    setComponentValue
});

export default connect(null, mapDispatchToProps)(PageComponent);
