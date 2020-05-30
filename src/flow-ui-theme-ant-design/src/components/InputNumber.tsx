import * as React from 'react';
import { InputNumber as AntdInputNumber } from 'antd';
import { PageComponentProps } from '@jonjomckay/flow-ui';
import BaseFormItem from './BaseFormItem';

export default function InputNumber({ component, onChange }: PageComponentProps): React.ReactElement<PageComponentProps> {
    // If we're given a prefix or suffix, add them to the display value
    const formatter = (value: string | number | undefined): string => {
        if (component.attributes?.prefix) {
            value = `${component.attributes.prefix}${value}`;
        }

        if (component.attributes?.suffix) {
            value = `${value}${component.attributes.suffix}`;
        }

        return (value || '').toString();
    };

    // If we're given a prefix or suffix, we remove them from the display value before it becomes the input's value
    const parser = (value: string | undefined): string => {
        if (component.attributes?.prefix) {
            value = value?.replace(component.attributes.prefix, '');
        }

        if (component.attributes?.suffix) {
            value = value?.replace(component.attributes.suffix, '');
        }

        return (value || '').toString();
    };

    const inputProps = {
        disabled: component.data.isEnabled === false,
        formatter: formatter,
        id: component.id,
        placeholder: component.hintValue,
        precision: Number.parseInt(component.attributes?.precision),
        required: component.data.isRequired,
        maxLength: component.maxSize,
        parser: parser,
        readOnly: component.data.isEditable === false,
        step: Number.parseFloat(component.attributes?.step),
        width: component.width
    };

    return (
        <BaseFormItem component={ component }>
            <AntdInputNumber { ...inputProps } onChange={ value => onChange({ contentValue: value?.toString() }) } />
        </BaseFormItem>
    );
}
