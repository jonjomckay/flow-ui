import * as React from 'react';
import InputNumber from './InputNumber';
import InputString from './InputString';
import { PageComponentProps } from '../../flow-ui';

export default function Input(props: PageComponentProps): React.ReactElement<PageComponentProps> {
    switch (props.component.contentType.toLowerCase()) {
        case 'contentnumber':
            return <InputNumber { ...props } />;
        default:
            return <InputString { ...props } />;
    }
}
