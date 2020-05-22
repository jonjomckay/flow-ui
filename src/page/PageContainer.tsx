import React from 'react';
import VerticalContainer from './containers/VerticalContainer';
import { Alert } from 'antd';
import { connect } from 'react-redux';
import PageComponent from './PageComponent';
import GroupContainer from './containers/GroupContainer';
import InlineContainer from './containers/InlineContainer';
import HorizontalContainer from './containers/HorizontalContainer';
import { IPageComponent, IPageContainer } from '../types';
import { RootState } from '../store';

interface Props {
    components: IPageComponent[]
    container: IPageContainer
}

const UnconnectedPageContainer = ({ components, container }: Props) => {
    const { containerType, id } = container;

    const nestedContainers = (container.pageContainerResponses || []).map(nestedContainer => {
        return (
            <PageContainer container={ nestedContainer } key={ nestedContainer.id } />
        )
    });

    const nestedComponents = (components || []).filter(component => component.pageContainerId === id).sort((a, b) => a.order - b.order).map(component => {
        return (
            // @ts-ignore
            // TODO: Figure out how to have props that only come from Redux in the type signature
            <PageComponent component={ component } key={ component.id } />
        )
    });

    const props = {
        containers: nestedContainers,
        components: nestedComponents,
        container: container,
    };

    switch (containerType) {
        case 'GROUP':
            return <GroupContainer { ...props } />;
        case 'HORIZONTAL_FLOW':
            return <HorizontalContainer { ...props } />;
        case 'INLINE_FLOW':
            return <InlineContainer { ...props } />;
        case 'VERTICAL_FLOW':
            return <VerticalContainer { ...props } />;
        default:
            console.warn('The container type ' + containerType + ' is not supported');

            const message = <span>Unknown container type <strong>{ containerType }</strong></span>;

            return <Alert message={ message } type="warning" showIcon />;
    }
};

const mapStateToProps = (state: RootState) => ({
    components: state.page.pageComponents
});

const PageContainer = connect(mapStateToProps)(UnconnectedPageContainer);

export default PageContainer;
