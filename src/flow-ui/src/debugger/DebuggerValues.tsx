import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { StateState } from '../state/stateReducer';

interface Props {
    state: StateState;
}

function DebuggerValues({ state }: Props) {
    const values = (state.invokeResponse?.stateValues || []);

    let content;
    if (values.length === 0) {
        content = (
            <div>
                No values yet
            </div>
        )
    } else {
        content = (
            <table style={{ width: '100%' }}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Value</th>
                </tr>
                </thead>

                <tbody>
                {
                    values.map((value: any) => {
                        return (
                            <tr>
                                <td>
                                    { value.valueElementId }
                                </td>

                                <td>
                                    { value.developerName }
                                </td>

                                <td>
                                    {/* TODO: Object data */}
                                    { value.contentValue }
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        )
    }

    return (
        <div>
            <h4>Values</h4>

            { content }
        </div>
    );
}

const mapStateToProps = (state: RootState) => ({
    state: state.state
});

export default connect(mapStateToProps)(DebuggerValues);
