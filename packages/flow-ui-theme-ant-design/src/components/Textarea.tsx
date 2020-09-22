import * as React from 'react';
import { Input } from 'antd';
import { TextareaProps } from '@jonjomckay/flow-ui';
import BaseFormItem from './BaseFormItem';

export default function Textarea({ component, onChange }: TextareaProps): React.ReactElement<TextareaProps> {
    const inputProps = {
        cols: component.width,
        disabled: component.data.isEnabled === false,
        maxLength: component.maxSize,
        placeholder: component.hintValue,
        readOnly: component.data.isEditable === false,
        required: component.data.isRequired,
        rows: component.height,
    };

    return (
        <BaseFormItem component={ component }>
            <Input.TextArea { ...inputProps }
                            onChange={ value => onChange(value.currentTarget.value) } />
        </BaseFormItem>
    );
}
