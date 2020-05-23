import React from 'react';
import { Button } from 'antd';
import { IOutcome } from '../types';

interface Props {
    isLoading: boolean
    outcome: IOutcome

    onClick(): void
}

export default function Outcome(props: Props) {
    const { isLoading, onClick, outcome } = props;

    return (
        <Button disabled={ isLoading } onClick={ onClick } type="primary">
            { outcome.label }
        </Button>
    );
}
