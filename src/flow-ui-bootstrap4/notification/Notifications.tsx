import * as React from 'react';
import { NotificationsProps } from '../../flow-ui';
import { Toast } from 'react-bootstrap';

export default function Notifications(props: NotificationsProps) {
    // TODO
    return (
        <div
            aria-live="polite"
            aria-atomic="true"
            style={{
                position: 'relative',
                zIndex: 100,
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 15,
                    right: 15,
                }}
            >
                <Toast>
                    <Toast.Header>
                        <strong className="mr-auto">Bootstrap</strong>
                        <small>just now</small>
                    </Toast.Header>
                    <Toast.Body>See? Just like this.</Toast.Body>
                </Toast>
                <Toast>
                    <Toast.Header>
                        <strong className="mr-auto">Bootstrap</strong>
                        <small>2 seconds ago</small>
                    </Toast.Header>
                    <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
                </Toast>
            </div>
        </div>
    )
}
