import * as React from 'react';
import { AlertProps } from '../../flow-ui';
import { Alert as BsAlert, AlertProps as BsAlertProps } from 'react-bootstrap';

export default function Alert(props: AlertProps): React.ReactElement<AlertProps> {
    let variant: BsAlertProps['variant'];
    switch (props.type) {
        case 'error':
            variant = 'danger';
            break;
        case 'info':
            variant = 'info';
            break;
        case 'success':
            variant = 'success';
            break;
        case 'warning':
            variant = 'warning';
            break;
        default:
            variant = 'primary';
            break;
    }

    return (
        <BsAlert variant={ variant }>
            <BsAlert.Heading>{ props.title }</BsAlert.Heading>

            <p>{ props.message }</p>
        </BsAlert>
    );
}
