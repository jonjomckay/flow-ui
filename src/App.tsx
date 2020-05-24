import React from 'react';
import { connect } from 'react-redux';
import { initializeFlow, InitializeFlowProps } from './actions';
import './App.less';
import Page from './page/Page';
import Notifications from './antd/notification/Notifications';

import theme from './antd/Antd';

interface Props {
    id: string
    tenant: string
    version: string | null

    initializeFlow(value: InitializeFlowProps): void
}

class App extends React.Component<Props> {
    componentDidMount() {
        this.props.initializeFlow({
            flowId: {
                id: this.props.id,
                versionId: this.props.version
            },
            tenantId: this.props.tenant
        })
    }

    render() {


        return (
            <>
                <Notifications />

                <Page theme={ theme } />
            </>
        );
    }
}

const mapDispatchToProps = ({
    initializeFlow
});

export default connect(null, mapDispatchToProps)(App);
