import * as React from 'react';
import { connect } from 'react-redux';
import { selectOutcome, setComponentValue } from '../actions';
import { IObjectData, IOutcome, IPageComponent, IPageInput } from '../types';
import PageComponentProps from './PageComponentProps';
import PageComponentError from './PageComponentError';
import ITheme from '../theme/ITheme';
import { RootState } from '../store';
import { ComponentType } from './PageConstants';
import { OutcomesGroup, OutcomesJustify, RadioOption, SelectOption } from '@jonjomckay/flow-ui';

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

    // If our theme can render the given component type, do so
    const content = createComponent(theme, props, componentType.toUpperCase());

    const loader = React.createElement(theme.loaderComponent);

    return (
        <PageComponentError component={ component } theme={ theme }>
            <React.Suspense fallback={ loader }>
                { content }
            </React.Suspense>
        </PageComponentError>
    )
};

function createComponent(theme: ITheme, props: PageComponentProps, type: string | ComponentType) {
    // Create some common props that all components probably end up using
    const commonProps = {
        ...props,
        height: props.component.height,
        label: props.component.label,
        width: props.component.width
    };

    const onChangeContentValue = (value: string) => {
        props.onChange({
            contentValue: value
        });
    };

    const onChangeObjectData = (objectData: IObjectData[] | undefined) => {
        props.onChange({
            objectData: objectData
        });
    }

    switch (type) {
        case ComponentType.Content:
            return React.createElement(theme.components.CONTENT, {
                ...commonProps,
                onChange: onChangeContentValue,
                value: props.component.data.contentValue
            });
        case ComponentType.Image:
            return React.createElement(theme.components.IMAGE, {
                ...commonProps,
                uri: props.component.data.imageUri
            });
        case ComponentType.Input:
            return React.createElement(theme.components.INPUT, {
                ...commonProps,
                onChange: onChangeContentValue
            });
        case ComponentType.List:
            const titleColumn = props.component.columns.find(c => c.order === 0);
            if (!titleColumn) {
                console.warn('No title column was provided for the List component ' + props.component.id);
                return null;
            }

            if (!props.objectData) {
                console.warn('No object data was given for the List component ' + props.component.id);
                return null;
            }

            const list = props.objectData.map(objectData => {
                const titleProperty = objectData.properties.find(p => p.typeElementPropertyId === titleColumn.typeElementPropertyToDisplayId);

                return {
                    key: objectData.internalId,
                    value: titleProperty?.contentValue
                }
            });

            return React.createElement(theme.components.LIST, {
                ...commonProps,
                isOrdered: (props.component.attributes && props.component.attributes['ordered'] && props.component.attributes['ordered'].toLowerCase() === 'true') || false,
                list: list
            });
        case ComponentType.Outcomes:
            let group: OutcomesGroup = null;
            if (props.component.attributes && props.component.attributes['group']) {
                group = props.component.attributes['group'] as OutcomesGroup;
            }

            let justify: OutcomesJustify = null;
            if (props.component.attributes && props.component.attributes['justify']) {
                justify = props.component.attributes['justify'] as OutcomesJustify;
            }

            return React.createElement(theme.components.OUTCOMES, {
                ...commonProps,
                group: group,
                justify: justify,
            });
        case ComponentType.Presentation:
            return React.createElement(theme.components.PRESENTATION, {
                ...commonProps,
                content: props.component?.data?.content
            });
        case ComponentType.Radio:
        {
            const labelColumn = props.component.columns.find(c => c.order === 0);
            if (!labelColumn) {
                console.warn('No label column was provided for the Radio component ' + props.component.id);
                return null;
            }

            return React.createElement(theme.components.RADIO, {
                ...commonProps,
                options: (props.objectData || []).map(objectData => {
                    const labelProperty = objectData.properties.find(p => p.typeElementPropertyId === labelColumn.typeElementPropertyToDisplayId);

                    return {
                        id: objectData.internalId,
                        isSelected: objectData.isSelected,
                        label: labelProperty?.contentValue || ''
                    }
                }),
                onChange: (options: RadioOption[]) => {
                    const data = props.objectData?.map(objectData => {
                        const option = options.find(o => o.id === objectData.internalId);

                        if (option) {
                            return {
                                ...objectData,
                                isSelected: option.isSelected
                            }
                        }

                        return objectData;
                    });

                    onChangeObjectData(data);
                }
            });
        }
        case ComponentType.Select:
        {
            const labelColumn = props.component.columns.find(c => c.isDisplayValue);
            if (!labelColumn) {
                console.warn('No label column was provided for the Select component ' + props.component.id);
                return null;
            }

            return React.createElement(theme.components.SELECT, {
                ...commonProps,
                options: (props.objectData || []).map(objectData => {
                    const labelProperty = objectData.properties.find(p => p.typeElementPropertyId === labelColumn?.typeElementPropertyId);

                    return {
                        id: objectData.internalId,
                        isSelected: objectData.isSelected,
                        label: labelProperty?.contentValue || ''
                    }
                }),
                onChange: (options: SelectOption[]) => {


                    const data = options.map(option => {
                        const object = props.objectData?.find(o => o.internalId === option.id);

                        if (object) {
                            return {
                                ...object,
                                isSelected: option.isSelected
                            }
                        }

                        return object;
                    })

                    onChangeObjectData(data);
                }
            });
        }
        case ComponentType.Table:
            return React.createElement(theme.components.TABLE, {
                ...commonProps,
                columns: props.component.columns,
                data: props.objectData,
                onChange: onChangeObjectData
            });
        case ComponentType.Textarea:
            return React.createElement(theme.components.TEXTAREA, {
                ...commonProps,
                onChange: onChangeContentValue
            });
        case ComponentType.Toggle:
            return React.createElement(theme.components.TOGGLE, {
                ...commonProps,
                checked: String(props.component.data.contentValue.toLowerCase()) === 'true',
                onChange: (checked: boolean) => {
                    onChangeContentValue(checked.toString())
                }
            })
        default:
            const componentComponent = theme.components[type];
            if (componentComponent) {
                return React.createElement(componentComponent, props);
            } else {
                // We can't map the container type to a container in the theme
                console.warn('The component type ' + type + ' is not supported');

                const message = <span>The component type <strong>{ type }</strong> is not supported</span>;

                return React.createElement(theme.alertComponent, {
                    message: message,
                    title: 'Unknown component',
                    type: 'warning'
                });
            }
    }
}

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
