import * as React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'antd';
import Presentation from './components/Presentation';
import Input from './components/Input';
import Textarea from './components/Textarea';
import SelectComponent from './components/SelectComponent';
import { setComponentValue, SetComponentValueProps } from '../actions';
import { IObjectData, IPageComponent, IPageInput } from '../types';
import { RootState } from '../store';

export interface IPageComponentProps {
    component: IPageComponent
    isLoading: boolean
    objectData?: IObjectData[]

    onChange(value: IPageComponentOnChangeProps): void
}

export interface IPageComponentOnChangeProps {
    objectData?: IObjectData[],
    contentValue?: string
}

interface Props {
    component: IPageComponent,
    input: IPageInput

    setComponentValue: (value: SetComponentValueProps) => {}
}

const PageComponent = ({ component, input, setComponentValue }: Props) => {
    const { componentType } = component;

    const onChange = (value: IPageComponentOnChangeProps) => {
        setComponentValue({
            contentValue: value.contentValue,
            objectData: value.objectData,
            pageComponentId: component.id
        });
    };

    const props: IPageComponentProps = {
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

const mapStateToProps = (state: RootState, ownProps: Props) => ({
    input: state.page.inputs[ownProps.component.id]
});

const mapDispatchToProps = ({
    setComponentValue
});

export default connect(mapStateToProps, mapDispatchToProps)(PageComponent);
