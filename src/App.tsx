import React from 'react';
import './App.less';
import { connect } from 'react-redux';
import { initializeFlow, InitializeFlowProps } from './actions';
import Page from './page/Page';

interface Props {
    initializeFlow(value: InitializeFlowProps): void
}

class App extends React.Component<Props> {
    componentDidMount() {
        this.props.initializeFlow({
            flowId: {
                id: 'c6b211f0-b342-4f67-b7b1-b8b62868b2a4'
            },
            tenantId: '07f799a4-af7c-449b-ba7c-f1f526f7000a'
        });

        // this.props.initializeFlow({
        //     flowId: {
        //         id: 'b7e2a056-35dd-4973-b279-c85aeafb299c',
        //         versionId: 'd3010f30-0f38-4a1e-bb8f-8700c0a6d31d'
        //     },
        //     tenantId: '1e6ba809-b1f7-4118-91c1-a5a6e7092ced'
        // })
    }

    render() {
        return (
            <Page />
        );
    }
}

const mapDispatchToProps = ({
    initializeFlow
});

export default connect(null, mapDispatchToProps)(App);
