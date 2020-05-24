import * as React from 'react';
import { connect } from 'react-redux';
import { selectOutcome, setComponentValue } from '../actions';
import { IObjectData, IOutcome, IPageComponent, IPageInput } from '../types';
import { RootState } from '../store';
import PageComponentProps from './PageComponentProps';
import PageComponentError from './PageComponentError';
import ITheme from '../ITheme';
import Loader from '../antd/common/Loader';

export interface PageComponentOnChangeProps {
    objectData?: IObjectData[];
    contentValue?: string;
}

interface Props {
    component: IPageComponent;
    input: IPageInput;
    outcomes: IOutcome[];
    theme: ITheme;

    selectOutcome: typeof selectOutcome;
    setComponentValue: typeof setComponentValue;
}

const PageComponent = ({ component, input, outcomes, selectOutcome, setComponentValue, theme }: Props) => {
    const { componentType } = component;

    const onChange = (value: PageComponentOnChangeProps) => {
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

    // If our theme can render the given component type, do so
    const componentComponent = theme.components[componentType.toUpperCase()];
    if (componentComponent) {
        content = React.createElement(componentComponent, props);
    } else {
        // We can't map the container type to a container in the theme
        console.warn('The component type ' + componentType + ' is not supported');

        const message = <span>Unknown component type <strong>{ componentType }</strong></span>;

        content = React.createElement(theme.alertComponent, {
            title: message,
            type: 'warning'
        });
    }

    return (
        <PageComponentError component={ component } theme={ theme }>
            <React.Suspense fallback={ <Loader /> }>
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
