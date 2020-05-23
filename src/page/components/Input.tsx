import * as React from 'react';
import { Input as AntdInput, InputNumber } from 'antd';
import PageComponentProps from '../PageComponentProps';
import BaseFormItem from './BaseFormItem';

export default function Input({ component, onChange }: PageComponentProps) {
    const inputProps = {
        placeholder: component.hintValue,
        required: component.data.isRequired,
        maxLength: component.size
    };

    let input;
    switch (component.contentType.toLowerCase()) {
        case 'contentnumber':
            input =
                <InputNumber { ...inputProps } onChange={ value => onChange({ contentValue: value?.toString() }) } />;
            break;
        default:
            input =
                <AntdInput { ...inputProps } onChange={ (e) => onChange({ contentValue: e.currentTarget.value }) } />;
            break;
    }

    return (
        <BaseFormItem component={ component }>
            { input }
        </BaseFormItem>
    );
}
