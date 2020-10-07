import * as React from 'react';
import { Select } from 'antd';
import { PageComponentProps, SelectProps } from '@jonjomckay/flow-ui';
import BaseFormItem from './BaseFormItem';

export default function SelectComponent({ component, isLoading, onChange, options }: SelectProps): React.ReactElement<PageComponentProps> {
    // TODO: Page conditions (hasEvents: true)

    const onChangeOption = (value: string | string[]) => {
        let data;

        // If this is a multiselect select box, we're given an array of selected values
        if (value instanceof Array) {
            data = options?.map(option => {
                return {
                    ...option,
                    isSelected: value.includes(option.id)
                }
            })
        } else {
            data = options?.map(option => {
                return {
                    ...option,
                    isSelected: option.id === value
                };
            })
        }

        onChange(data);
    };

    let mode;
    if (component.isMultiSelect) {
        mode = 'multiple';
    }

    const inputProps = {
        disabled: isLoading,
        loading: isLoading,
        mode: mode,
        onChange: onChangeOption,
        placeholder: component.hintValue,
        required: component.data.isRequired,
        maxLength: component.size
    };

    let selectOptions: JSX.Element[] = options.map(option => {
        return (
            <Select.Option key={ option.id } value={ option.id }>
                { option.label }
            </Select.Option>
        )
    });

    return (
        <BaseFormItem component={ component }>
            <Select { ...inputProps } style={ { width: 180 } }>
                { selectOptions }
            </Select>
        </BaseFormItem>
    )
}
