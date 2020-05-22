import React from 'react';
import { Alert } from 'antd';
import Presentation from './components/Presentation';
import Input from './components/Input';
import { connect } from 'react-redux';
import { setComponentValue } from '../actions';
import Textarea from './components/Textarea';
import SelectComponent from './components/SelectComponent';

const PageComponent = ({ component, input, setComponentValue }) => {
    const { componentType } = component;

    const onChange = (value) => {
        setComponentValue({
            contentValue: value.contentValue,
            objectData: value.objectData,
            pageComponentId: component.id
        });
    };

    const props = {
        ...input,
        component: component,
        onChange: onChange
    };

    switch (componentType) {
        case 'INPUT':
            return <Input { ...props } />;
        case 'PRESENTATION':
            return <Presentation { ...props } />;
        case 'SELECT':
            return <SelectComponent { ...props } />;
        case 'TEXTAREA':
            return <Textarea { ...props } />;
        default:
            console.warn('The component type ' + componentType + ' is not supported');

            const message = <span>Unknown component type <strong>{ componentType }</strong></span>;

            return <Alert message={ message } type="warning" showIcon />;
    }
};

const mapStateToProps = (state, ownProps) => ({
    input: state.page.inputs[ownProps.component.id]
});

const mapDispatchToProps = ({
    setComponentValue
});

export default connect(mapStateToProps, mapDispatchToProps)(PageComponent);
