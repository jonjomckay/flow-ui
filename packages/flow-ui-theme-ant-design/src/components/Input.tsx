import * as React from 'react';
import InputNumber from './InputNumber';
import InputString from './InputString';
import { InputProps } from '@jonjomckay/flow-ui';

export default function Input(props: InputProps): React.ReactElement<InputProps> {
    switch (props.component.contentType.toLowerCase()) {
        case 'contentnumber':
            return <InputNumber { ...props } />;
        default:
            return <InputString { ...props } />;
    }
}
