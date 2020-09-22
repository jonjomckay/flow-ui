import * as React from 'react';
import { RadioProps } from '@jonjomckay/flow-ui';
import { Radio as AntdRadio } from 'antd';
import BaseFormItem from './BaseFormItem';
import { RadioChangeEvent } from 'antd/es/radio';

export default function Radio(props: RadioProps): React.ReactElement<RadioProps> | null {
    const onChange = (e: RadioChangeEvent) => {
        props.onChange(props.options?.map(option => {
            if (option.id === e.target.value) {
                return {
                    ...option,
                    isSelected: e.target.checked
                }
            }

            return option;
        }))
    }

    const radioGroupProps = {
        disabled: !props.component.data.isEnabled,
        loading: props.isLoading,
        onChange: onChange,
        title: props.component.label
    }

    const radioGroup = props.options?.map(option => {
        return (
            <AntdRadio defaultChecked={ option.isSelected } key={ option.id } value={ option.id }>
                { option.label }
            </AntdRadio>
        )
    });

    return (
        <BaseFormItem component={ props.component }>
            <AntdRadio.Group { ...radioGroupProps }>
                { radioGroup }
            </AntdRadio.Group>
        </BaseFormItem>
    )
}
