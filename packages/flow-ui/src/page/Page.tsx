import * as React from 'react';
import { connect } from 'react-redux';
import PageContainer from './PageContainer';
import Outcomes from '../outcomes/Outcomes';
import { RootState } from '../store';
import { IPageContainer } from '../types';
import ProgressBar from '../common/ProgressBar';

import ITheme from '../ITheme';
import { FlowNavigationResponse } from '../types/FlowNavigationResponse';

interface PageProps {
    containers: IPageContainer[];
    isLoading: boolean;
    navigation: FlowNavigationResponse | null;

    theme: ITheme;
}

const Page = (props: PageProps) => {
    const containers = props.containers
        .sort((a, b) => a.order - b.order)
        .map(container => <PageContainer container={ container } key={ container.id } theme={ props.theme } />);

    const navigation = props.navigation
        ? React.createElement(props.theme.navigation)
        : null;

    // Create the root container from the given theme
    const rootContainer = React.createElement(props.theme.rootContainer, {}, [
        containers,
        <Outcomes key="outcomes" theme={ props.theme } />
    ]);

    return (
        <>
            <ProgressBar percent={ props.isLoading ? 25 : 100 } />

            { navigation }

            { rootContainer }
        </>
    );
};

const mapStateToProps = (state: RootState) => ({
    containers: state.page.pageContainers,
    navigation: state.navigation.navigation,
    isLoading: state.state.isLoading
});

export default connect(mapStateToProps)(Page);
