import * as React from 'react';
import { connect } from 'react-redux';
import { Alert, Spin } from 'antd';
import { selectOutcome, setComponentValue } from '../actions';
import { IObjectData, IOutcome, IPageComponent, IPageInput } from '../types';
import { RootState } from '../store';
import PageComponentProps from './PageComponentProps';
import PageComponentError from './PageComponentError';

const Content = React.lazy(() => import('./components/Content'));
const Image = React.lazy(() => import('./components/Image'));
const Input = React.lazy(() => import('./components/Input'));
const List = React.lazy(() => import('./components/List'));
const Outcomes = React.lazy(() => import('./components/Outcomes'));
const Presentation = React.lazy(() => import('./components/Presentation'));
const Radio = React.lazy(() => import('./components/Radio'));
const SelectComponent = React.lazy(() => import('./components/SelectComponent'));
const Table = React.lazy(() => import('./components/Table'));
const Textarea = React.lazy(() => import('./components/Textarea'));
const Toggle = React.lazy(() => import('./components/Toggle'));

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

    let content;

    switch (componentType.toUpperCase()) {
        case 'CONTENT':
            content = <Content { ...props } />;
            break;
        case 'IMAGE':
            content = <Image { ...props } />;
            break;
        case 'INPUT':
            content = <Input { ...props } />;
            break;
        case 'LIST':
            content = <List { ...props } />;
            break;
        case 'OUTCOMES':
            content = <Outcomes { ...props } />;
            break;
        case 'PRESENTATION':
            content = <Presentation { ...props } />;
            break;
        case 'RADIO':
            content = <Radio { ...props } />;
            break;
        case 'SELECT':
            content = <SelectComponent { ...props } />;
            break;
        case 'TEXTAREA':
            content = <Textarea { ...props } />;
            break;
        case 'TABLE':
            content = <Table { ...props } />;
            break;
        case 'TOGGLE':
            content = <Toggle { ...props } />;
            break;
        default:
            console.warn('The component type ' + componentType + ' is not supported');

            const message = <span>Unknown component type <strong>{ componentType }</strong></span>;

            content = <Alert message={ message } type="warning" showIcon />;
            break;
    }

    return (
        <PageComponentError component={ component }>
            <React.Suspense fallback={ <Spin delay={ 200 } /> }>
                { content }
            </React.Suspense>
        </PageComponentError>
    )
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
