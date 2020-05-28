import * as React from 'react';
import { connect } from 'react-redux';
import { selectOutcome, setComponentValue } from '../actions';
import { IObjectData, IOutcome, IPageComponent, IPageInput } from '../types';
import PageComponentProps from './PageComponentProps';
import PageComponentError from './PageComponentError';
import ITheme from '../theme/ITheme';
import { RootState } from '../store';

export interface PageComponentOnChangeProps {
    objectData?: IObjectData[];
    contentValue?: string;
}

// These props are the ones passed in from PageContainer - seems there's a bug in the Redux types that fails the type
// check if you use a mix of manually-passed-in props and Redux props unless two different interfaces are used...
interface OwnProps {
    component: IPageComponent;
    theme: ITheme;
}

type Props = & OwnProps & {
    input: IPageInput;
    isLoading: boolean,
    outcomes: IOutcome[];
    selectOutcome: typeof selectOutcome;
    setComponentValue: typeof setComponentValue;
}

const PageComponent = ({ component, input, isLoading, outcomes, selectOutcome, setComponentValue, theme }: Props) => {
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
        isLoading: isLoading,
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

        const message = <span>The component type <strong>{ componentType }</strong> is not supported</span>;

        content = React.createElement(theme.alertComponent, {
            message: message,
            title: 'Unknown component',
            type: 'warning'
        });
    }

    const loader = React.createElement(theme.loaderComponent);

    return (
        <PageComponentError component={ component } theme={ theme }>
            <React.Suspense fallback={ loader }>
                { content }
            </React.Suspense>
        </PageComponentError>
    )
};

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
    input: state.page.inputs[ownProps.component.id],
    isLoading: state.page.loadingComponents.includes(ownProps.component.id),
    outcomes: state.outcomes.outcomes.filter(outcome => outcome.pageObjectBindingId === ownProps.component.id),
});

const mapDispatchToProps = ({
    setComponentValue,
    selectOutcome
});

export default connect(mapStateToProps, mapDispatchToProps)(PageComponent);
