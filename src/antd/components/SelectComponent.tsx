import * as React from 'react';
import { Select } from 'antd';
import { IPageComponentColumn } from '../../types';
import PageComponentProps from '../../page/PageComponentProps';
import BaseFormItem from './BaseFormItem';

export default function SelectComponent({ component, isLoading, objectData, onChange }: PageComponentProps) {
    // TODO: Multiselect
    // TODO: Page conditions (hasEvents: true)

    const onChangeOption = (value: string) => {
        const found = objectData?.find(object => object.internalId === value);

        return onChange({
            objectData: found ? [found] : []
        });
    };

    const inputProps = {
        disabled: isLoading,
        loading: isLoading,
        onChange: onChangeOption,
        placeholder: component.hintValue,
        required: component.data.isRequired,
        maxLength: component.size
    };

    let options: JSX.Element[] = [];

    let labelProperty = component.columns.find((column: IPageComponentColumn) => column.isDisplayValue);
    if (labelProperty && objectData) {
        options = objectData.map(object => {
            const label = object.properties.find(property => property.typeElementPropertyId === labelProperty?.typeElementPropertyId);

            return (
                <Select.Option key={ object.internalId } value={ object.internalId }>
                    { label?.contentValue }
                </Select.Option>
            )
        });
    }

    return (
        <BaseFormItem component={ component }>
            <Select { ...inputProps } style={ { width: 180 } }>
                { options }
            </Select>
        </BaseFormItem>
    )
}
