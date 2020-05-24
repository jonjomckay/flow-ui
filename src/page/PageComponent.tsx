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
import PageComponentProps from './PageComponentProps';
import Image from './components/Image';
import Table from './components/Table';
import List from './components/List';
import Toggle from './components/Toggle';

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

    const props: PageComponentProps = {
        ...input,
        component: component,
        onChange: onChange
    };

    switch (componentType.toUpperCase()) {
        case 'IMAGE':
            return <Image { ...props } />;
        case 'INPUT':
            return <Input { ...props } />;
        case 'LIST':
            return <List { ...props } />;
        case 'PRESENTATION':
            return <Presentation { ...props } />;
        case 'SELECT':
            return <SelectComponent { ...props } />;
        case 'TEXTAREA':
            return <Textarea { ...props } />;
        case 'TABLE':
            return <Table { ...props } />;
        case 'TOGGLE':
            return <Toggle { ...props } />;
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
