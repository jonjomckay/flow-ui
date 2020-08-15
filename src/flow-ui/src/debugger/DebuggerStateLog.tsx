import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { StateState } from '../state/stateReducer';

interface Props {
    state: StateState;
}

function DebuggerStateLog({ state }: Props) {
    const stateLog = [];

    let content;
    if (stateLog.length === 0) {
        content = (
            <div>
                No log entries yet
            </div>
        )
    } else {
        content = (
            <table style={{ width: '100%' }}>
                <thead>
                <tr>
                    <th>When</th>
                    <th>Message</th>
                    <th>Data</th>
                </tr>
                </thead>

                <tbody>
                </tbody>
            </table>
        )
    }

    return (
        <div>
            <h4>State Log</h4>

            { content }
        </div>
    );
}

const mapStateToProps = (state: RootState) => ({
    state: state.state
});

export default connect(mapStateToProps)(DebuggerStateLog);
