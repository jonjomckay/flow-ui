import * as React from 'react';
import PageComponentProps from '../PageComponentProps';
import InputNumber from './InputNumber';
import InputString from './InputString';

export default function Input({ component, isLoading, onChange }: PageComponentProps) {
    switch (component.contentType.toLowerCase()) {
        case 'contentnumber':
            return <InputNumber component={ component } isLoading={ isLoading } onChange={ onChange } />;
        default:
            return <InputString component={ component } isLoading={ isLoading } onChange={ onChange } />;
    }
}
