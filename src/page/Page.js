import React from 'react';
import { connect } from 'react-redux';
import PageContainer from './PageContainer';
import Outcomes from '../outcomes/Outcomes';
import ProgressBar from 'react-progress-bar-plus';
import { Layout } from 'antd';
import Navigation from '../navigation/Navigation';

const Page = props => {
    const containers = props.containers
        .sort((a, b) => a.order - b.order)
        .map(container => <PageContainer container={ container } key={ container.id } />);

    return (
        <Layout>
            <ProgressBar autoIncrement percent={ props.isLoading ? 25 : 100 } spinner="right" />

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

const mapStateToProps = state => ({
    containers: state.page.pageContainers,
    isLoading: state.state.isLoading
});

export default connect(mapStateToProps)(Page);
