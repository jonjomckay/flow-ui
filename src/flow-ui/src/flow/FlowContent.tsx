import * as React from 'react';
import { connect } from 'react-redux';
import { initializeFlow, InitializeFlowProps } from '../actions';
import { ITheme } from '../index';
import Page from '../page/Page';
import './FlowContent.less';
import FlowDebugger from './FlowDebugger';

interface Props {
    id: string;
    mode?: string;
    sessionToken?: string;
    tenant: string;
    theme: ITheme;
    version?: string | null;

    initializeFlow(value: InitializeFlowProps): void;
}

class FlowContent extends React.Component<Props> {
    componentDidMount() {
        this.props.initializeFlow({
            flowId: {
                id: this.props.id,
                versionId: this.props.version
            },
            mode: this.props.mode,
            sessionToken: this.props.sessionToken,
            tenantId: this.props.tenant
        })
    }

    render() {
        const notifications = React.createElement(this.props.theme.notificationsComponent);

        const debuggerComponent = this.props.mode === 'DEBUG'
            ? <FlowDebugger theme={ this.props.theme } />
            : null;

        return (
            <React.Suspense fallback={''}>
                { notifications }

                <div className="flow-content">
                    <Page theme={ this.props.theme } />

                    { debuggerComponent }
                </div>
            </React.Suspense>
        );
    }
}

const mapDispatchToProps = ({
    initializeFlow
});

export default connect(null, mapDispatchToProps)(FlowContent);
