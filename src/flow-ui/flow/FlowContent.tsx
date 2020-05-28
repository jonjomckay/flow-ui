import * as React from 'react';
import { connect } from 'react-redux';
import { initializeFlow, InitializeFlowProps } from '../actions';
import { ITheme } from '../index';
import Page from '../page/Page';

interface Props {
    id: string;
    tenant: string;
    theme: ITheme;
    version: string | null;

    initializeFlow(value: InitializeFlowProps): void;
}

class FlowContent extends React.Component<Props> {
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
        const notifications = React.createElement(this.props.theme.notificationsComponent);

        return (
            <>
                { notifications }

                <Page theme={ this.props.theme } />
            </>
        );
    }
}

const mapDispatchToProps = ({
    initializeFlow
});

export default connect(null, mapDispatchToProps)(FlowContent);
