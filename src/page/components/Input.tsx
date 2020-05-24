import * as React from 'react';
import PageComponentProps from '../PageComponentProps';
import InputNumber from './InputNumber';
import InputString from './InputString';

export default function Input(props: PageComponentProps) {
    switch (props.component.contentType.toLowerCase()) {
        case 'contentnumber':
            return <InputNumber { ...props } />;
        default:
            return <InputString { ...props } />;
    }
}
