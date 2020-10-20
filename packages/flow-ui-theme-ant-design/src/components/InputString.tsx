import * as React from 'react';
import { Input } from 'antd';
import { InputProps } from '@jonjomckay/flow-ui';
import BaseFormItem from './BaseFormItem';

export default function InputString({ component, onChange }: InputProps): React.ReactElement<InputProps> {
    let type;
    switch (component.contentType) {
        case 'ContentPassword':
            type = 'password';
            break;
        default:
            type = 'text';
            break;
    }

    const inputProps = {
        addonAfter: component.attributes?.suffix,
        addonBefore: component.attributes?.prefix,
        disabled: component.data.isEnabled === false,
        id: component.id,
        placeholder: component.hintValue,
        required: component.data.isRequired,
        maxLength: component.maxSize,
        readOnly: component.data.isEditable === false,
        style: {
            width: `${component.size}em`
        },
        type: type
    };

    return (
        <BaseFormItem component={ component }>
            <Input { ...inputProps } onChange={ (e) => onChange(e.currentTarget.value) } />
        </BaseFormItem>
    );
}
