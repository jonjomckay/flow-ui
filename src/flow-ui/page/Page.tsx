import * as React from 'react';
import { connect } from 'react-redux';
import PageContainer from './PageContainer';
import Outcomes from '../outcomes/Outcomes';
import { RootState } from '../store';
import { IPageContainer } from '../types';
import ProgressBar from '../common/ProgressBar';
import ITheme from '../theme/ITheme';
import Navigation from '../navigation/Navigation';

interface PageProps {
    containers: IPageContainer[];
    isLoading: boolean;

    theme: ITheme;
}

const Page = (props: PageProps) => {
    const containers = props.containers
        .sort((a, b) => a.order - b.order)
        .map(container => <PageContainer container={ container } key={ container.id } theme={ props.theme } />);

    // Create the root container from the given theme
    const rootContainer = React.createElement(props.theme.rootContainer, {}, [
        containers,
        <Outcomes key="outcomes" theme={ props.theme } />
    ]);

    return (
        <>
            <ProgressBar percent={ props.isLoading ? 25 : 100 } />

            <Navigation theme={ props.theme } />

            { rootContainer }
        </>
    );
};

const mapStateToProps = (state: RootState) => ({
    containers: state.page.pageContainers,
    isLoading: state.state.isLoading
});

export default connect(mapStateToProps)(Page);
