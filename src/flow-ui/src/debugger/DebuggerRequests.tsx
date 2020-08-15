import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import parseISO from 'date-fns/parseISO';
import { ITheme } from '../index';
import { renderPageComponent } from '../page/pageComponentUtils';

function convertUrlToType(method: string, uri: string): string {
    if (uri.endsWith('/authentication')) {
        return 'Authentication';
    } else if (uri.endsWith('/authorization')) {
        return 'Authorization';
    } else if (uri.endsWith('/authorization/group')) {
        return 'List groups';
    } else if (uri.endsWith('/authorization/group/attribute')) {
        return 'List group attributes';
    } else if (uri.endsWith('/authorization/user')) {
        return 'List users';
    } else if (uri.endsWith('/authorization/user/attribute')) {
        return 'List user attributes';
    } else if (uri.endsWith('/data')) {

        switch (method) {
            case 'POST':
                return 'Database load';
            case 'PUT':
                return 'Database save';
        }

        return 'Unknown database action';

    } else if (uri.endsWith('/data/delete')) {
        return 'Database delete';
    } else if (uri.endsWith('/file')) {
        return 'File list';
    } else if (uri.endsWith('/file/content')) {
        return 'File upload';
    } else if (uri.endsWith('/file/delete')) {
        return 'File delete';
    } else if (uri.endsWith('/listener')) {
        return 'Listener';
    } else {
        return 'Message action';
    }
}

function createRequestStatus(theme: ITheme, request: any) {
    console.log(request);

    // TODO
    let props: any = {
        component: {
            attributes: {},
            data: {}
        }
    };

    if (request.attributes === null ||
        request.attributes.numberOfResponses === 0 &&
        request.attributes.numberOfFailures === 0) {
        props.component.attributes.type = 'blue';
        props.component.data.contentValue = 'Pending';
    } else if (request.attributes.numberOfResponses > 0) {
        props.component.attributes.type = 'success';
        props.component.data.contentValue = 'Successful';
    } else {
        props.component.attributes.type = 'error';
        props.component.data.contentValue = 'Failed';
    }

    return renderPageComponent(theme, 'tag', props);
}

interface Props {
    requests: any[]; // TODO

    theme: ITheme;
}

function DebuggerRequests({ requests, theme }: Props) {
    let content;
    if (requests.length === 0) {
        content = (
            <div>
                No requests yet
            </div>
        )
    } else {
        content = (
            <table style={ { width: '100%' } }>
                <thead>
                <tr>
                    <th>When</th>
                    <th>Type</th>
                    <th>Status</th>
                </tr>
                </thead>

                <tbody>
                { requests.map(request => (
                    <tr key={ request.id }>
                        <td title={ request.createdAt }>
                            { formatDistanceToNow(parseISO(request.createdAt), { addSuffix: true }) }
                        </td>

                        <td>
                            { convertUrlToType(request.method, request.uri) }
                        </td>

                        <td>
                            { createRequestStatus(theme, request) }
                        </td>
                    </tr>
                )) }
                </tbody>
            </table>
        )
    }

    return (
        <div>
            <h4>Requests</h4>

            { content }
        </div>
    );
}

const mapStateToProps = (state: RootState) => ({
    requests: state.debugger.requests,
    state: state.state
});

export default connect(mapStateToProps)(DebuggerRequests);
