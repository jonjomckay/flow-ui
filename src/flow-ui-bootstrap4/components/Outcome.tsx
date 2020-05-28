import React from 'react';
import { IOutcome, PageComponentProps } from '../../flow-ui';
import { Button, ButtonProps } from 'react-bootstrap';

interface Props {
    isLoading: boolean
    outcome: IOutcome

    onClick(): void
}

export default function Outcome(props: Props): React.ReactElement<PageComponentProps> {
    const { isLoading, onClick, outcome } = props;

    let variant: ButtonProps['variant'];
    switch (outcome.pageActionType?.toLowerCase()) {
        case 'apply':
        case 'insert':
        case 'new':
        case 'save':
        case 'submit':
            variant = 'primary';
            break;
        case 'add':
        case 'import':
        case 'update':
        case 'upsert':
            variant = 'success';
            break;
        case 'edit':
        case 'escalate':
        case 'query':
            variant = 'info';
            break;
        case 'cancel':
        case 'delete':
        case 'reject':
        case 'remove':
            variant = 'danger';
            break;
        case 'back':
            variant = 'secondary';
            break;
        default:
            variant = 'primary';
            break;
    }

    return (
        <Button disabled={ isLoading } onClick={ onClick } variant={ variant }>
            { outcome.label }
        </Button>
    );
}
