import React from 'react';
import { connect } from 'react-redux';
import PageComponent from './PageComponent';
import { IPageComponent, IPageContainer } from '../types';
import { RootState } from '../store';
import ITheme from '../theme/ITheme';
import PageContainerProps from './PageContainerProps';

interface Props {
    components: IPageComponent[];
    container: IPageContainer;
    theme: ITheme;
}

const UnconnectedPageContainer = ({ components, container, theme }: Props) => {
    const { containerType, id } = container;

    const nestedContainers = (container.pageContainerResponses || []).map(nestedContainer => {
        return (
            <PageContainer container={ nestedContainer } key={ nestedContainer.id } theme={ theme } />
        )
    });

    const nestedComponents = (components || []).filter(component => component.pageContainerId === id).sort((a, b) => a.order - b.order).map(component => {
        return <PageComponent component={ component } key={ component.id } theme={ theme } />
    });

    const props: PageContainerProps = {
        containers: nestedContainers,
        components: nestedComponents,
        container: container,
    };

    // If our theme can render the given container type, do so
    const containerComponent = theme.containers[containerType.toUpperCase()];
    if (containerComponent) {
        return React.createElement(containerComponent, props);
    }

    // We can't map the container type to a container in the theme
    console.warn('The container type ' + containerType + ' is not supported');

    const message = <span>The container type <strong>{ containerType }</strong> is not supported</span>;

    return React.createElement(theme.alertComponent, {
        message: message,
        title: 'Unknown container',
        type: 'warning'
    });
};

const mapStateToProps = (state: RootState) => ({
    components: state.page.pageComponents,
});

const PageContainer = connect(mapStateToProps)(UnconnectedPageContainer);

export default PageContainer;
