import React from 'react';
import { Button } from 'antd';
import { IOutcome } from '../../types';
import { ButtonType } from 'antd/es/button';

interface Props {
    isLoading: boolean
    outcome: IOutcome

    onClick(): void
}

export default function Outcome(props: Props): React.ReactElement<PageComponentProps> {
    const { isLoading, onClick, outcome } = props;

    const danger = ['cancel', 'delete', 'reject', 'remove'].includes(outcome.pageActionType?.toLowerCase());

    let type: ButtonType;
    switch (outcome.pageActionType?.toLowerCase()) {
        case 'add':
        case 'cancel':
        case 'delete':
        case 'import':
        case 'reject':
        case 'remove':
        case 'update':
        case 'upsert':
        case 'back':
            type = 'default';
            break;
        default:
            type = 'primary';
            break;
    }

    return (
        <Button danger={ danger } disabled={ isLoading } onClick={ onClick } type={ type }>
            { outcome.label }
        </Button>
    );
}
