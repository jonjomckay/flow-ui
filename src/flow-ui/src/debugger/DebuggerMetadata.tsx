import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { StateState } from '../state/stateReducer';

interface Props {
    state: StateState;
}

function DebuggerMetadata({ state }: Props) {
    return (
        <div>
            <h4>Metadata</h4>

            <dl>
                <dt>State ID</dt>
                <dd>
                    <code>{ state.id }</code>
                </dd>

                <dt>Tenant ID</dt>
                <dd>
                    <code>{ state.tenantId }</code>
                </dd>

                <dt>Current Map Element ID</dt>
                <dd>
                    <code>{ state.currentMapElementId }</code>
                </dd>
            </dl>
        </div>
    );
}

const mapStateToProps = (state: RootState) => ({
    state: state.state
});

export default connect(mapStateToProps)(DebuggerMetadata);
