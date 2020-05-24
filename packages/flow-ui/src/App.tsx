import * as React from 'react';
import { connect } from 'react-redux';
import { initializeFlow, InitializeFlowProps } from './actions';
import './App.less';
import Page from './page/Page';

import theme from '@project/flow-ui-antd';

interface Props {
    id: string;
    tenant: string;
    version: string | null;

    initializeFlow(value: InitializeFlowProps): void;
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
        const notifications = React.createElement(theme.notificationsComponent);

        return (
            <>
                { notifications }

                <Page theme={ theme } />
            </>
        );
    }
}

const mapDispatchToProps = ({
    initializeFlow
});

export default connect(null, mapDispatchToProps)(App);
