import * as React from 'react';
import { Input } from 'antd';
import { PageComponentProps } from '../../flow-ui';
import BaseFormItem from './BaseFormItem';

export default function InputString({ component, onChange }: PageComponentProps): React.ReactElement<PageComponentProps> {
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
            <Input { ...inputProps } onChange={ (e) => onChange({ contentValue: e.currentTarget.value }) } />
        </BaseFormItem>
    );
}
