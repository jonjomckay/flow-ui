import React from 'react';
import { connect } from 'react-redux';
import PageContainer from './PageContainer';
import Outcomes from '../outcomes/Outcomes';
import { Layout } from 'antd';
import Navigation from '../navigation/Navigation';
import { RootState } from '../store';
import { IPageContainer } from '../types';
import ProgressBar from '../common/ProgressBar';

interface PageProps {
    containers: IPageContainer[]
    isLoading: boolean
}

const Page = (props: PageProps) => {
    const containers = props.containers
        .sort((a, b) => a.order - b.order)
        .map(container => <PageContainer container={ container } key={ container.id } />);

    return (
        <Layout>
            <ProgressBar percent={ props.isLoading ? 25 : 100 } />

            <Layout.Header>
                <Navigation />
            </Layout.Header>

            <Layout.Content className="container" style={{ padding: '1.5rem 50px', width: '1280px' }}>
                { containers }

                <Outcomes />
            </Layout.Content>
        </Layout>
    );
};

const mapStateToProps = (state: RootState) => ({
    containers: state.page.pageContainers,
    isLoading: state.state.isLoading
});

export default connect(mapStateToProps)(Page);
