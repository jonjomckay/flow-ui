import * as React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'antd';
import Presentation from './components/Presentation';
import Input from './components/Input';
import Textarea from './components/Textarea';
import SelectComponent from './components/SelectComponent';
import { selectOutcome, setComponentValue } from '../actions';
import { IObjectData, IOutcome, IPageComponent, IPageInput } from '../types';
import { RootState } from '../store';
import PageComponentProps from './PageComponentProps';
import Image from './components/Image';
import Table from './components/Table';
import List from './components/List';
import Toggle from './components/Toggle';
import Radio from './components/Radio';
import Outcomes from './components/Outcomes';
import Content from './components/Content';

export interface IPageComponentOnChangeProps {
    objectData?: IObjectData[],
    contentValue?: string
}

interface Props {
    component: IPageComponent,
    input: IPageInput
    outcomes: IOutcome[]

    selectOutcome: typeof selectOutcome
    setComponentValue: typeof setComponentValue
}

const PageComponent = ({ component, input, outcomes, selectOutcome, setComponentValue }: Props) => {
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
        onChange: onChange,
        outcomes: outcomes,
        selectOutcome: selectOutcome
    };

    switch (componentType.toUpperCase()) {
        case 'CONTENT':
            return <Content { ...props } />;
        case 'IMAGE':
            return <Image { ...props } />;
        case 'INPUT':
            return <Input { ...props } />;
        case 'LIST':
            return <List { ...props } />;
        case 'OUTCOMES':
            return <Outcomes { ...props } />;
        case 'PRESENTATION':
            return <Presentation { ...props } />;
        case 'RADIO':
            return <Radio { ...props } />;
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
    input: state.page.inputs[ownProps.component.id],
    outcomes: state.outcomes.outcomes.filter(outcome => outcome.pageObjectBindingId === ownProps.component.id)
});

const mapDispatchToProps = ({
    setComponentValue,
    selectOutcome
});

export default connect(mapStateToProps, mapDispatchToProps)(PageComponent);
