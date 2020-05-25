import * as React from 'react';
import { InputNumber as AntdInputNumber } from 'antd';
import PageComponentProps from '../../page/PageComponentProps';
import BaseFormItem from './BaseFormItem';

export default function InputNumber({ component, onChange }: PageComponentProps): React.ReactNode {
    const inputProps = {
        disabled: component.data.isEnabled === false,
        id: component.id,
        placeholder: component.hintValue,
        required: component.data.isRequired,
        maxLength: component.maxSize,
        readOnly: component.data.isEditable === false,
        width: component.width
    };

    return (
        <BaseFormItem component={ component }>
            <AntdInputNumber { ...inputProps } onChange={ value => onChange({ contentValue: value?.toString() }) } />
        </BaseFormItem>
    );
}
