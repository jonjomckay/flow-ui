import * as React from 'react';
import { connect } from 'react-redux';
import { Flow, ITheme, RootState } from '../index';
import './FlowDebugger.less';
import DebuggerMetadata from '../debugger/DebuggerMetadata';
import DebuggerRequests from '../debugger/DebuggerRequests';
import DebuggerValues from '../debugger/DebuggerValues';
import DebuggerStateLog from '../debugger/DebuggerStateLog';

interface Props {
    theme: ITheme;
}

function FlowDebugger({ theme }: Props) {
    const params = new URLSearchParams(window.location.search);

    let content;
    if (params.has('user-token')) {
        content = (
            <div>
                <DebuggerValues />
            </div>
        );
    } else {
        content = React.createElement(theme.alertComponent, {
            message: <p>The debugger requires a valid Flow builder token in the <code>user-token</code> query parameter</p>,
            title: 'Oops',
            type: 'error'
        });
    }

    // If a user-token value exists...
    // Check if the token has access to the flow's tenant
    // Load service requests for the current state on every invoke

    return (
        <div className="flow-debugger">
            <h2>Debugger</h2>

            <Flow id="c54861a3-954b-4352-893b-bc65150e9e5d"
                  sessionToken={ params.get('user-token') || undefined }
                  tenant="cdbb74d7-dca8-408d-acda-bb85e38fbd94"
                  theme={ theme }
            />

            {/*{ content }*/}
        </div>
    );
}

const mapStateToProps = (state: RootState) => ({

});

export default connect(mapStateToProps)(FlowDebugger);
