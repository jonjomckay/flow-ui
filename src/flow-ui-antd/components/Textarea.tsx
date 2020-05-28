import * as React from 'react';
import { Input } from 'antd';
import { PageComponentProps } from '../../flow-ui';
import BaseFormItem from './BaseFormItem';

export default function Textarea({ component, onChange }: PageComponentProps): React.ReactElement<PageComponentProps> {
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
                            onChange={ value => onChange({ contentValue: value.currentTarget.value }) } />
        </BaseFormItem>
    );
}
