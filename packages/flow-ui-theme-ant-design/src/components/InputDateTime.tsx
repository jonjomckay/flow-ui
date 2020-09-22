import * as React from 'react';
import { DatePicker, TimePicker } from 'antd';
import { InputProps } from '@jonjomckay/flow-ui';
import BaseFormItem from './BaseFormItem';
import { useState } from 'react';

export default function InputDateTime({ component, onChange }: InputProps): React.ReactElement<InputProps> {
    const [date, setDate] = useState();
    const [time, setTime] = useState();

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
        }
    };

    const onDateChange = (date: any, dateString: string) => {

    };

    const onTimeChange = (date: any, dateString: string) => {

    };

    console.log(component);

    return (
        <BaseFormItem component={ component }>
            <div>
                <DatePicker { ...inputProps } onChange={ (date, dateString) => onChange({ contentValue: dateString })} />
                <TimePicker { ...inputProps } />
            </div>
        </BaseFormItem>
    );
}
