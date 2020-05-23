import * as React from 'react';
import { Form, Select } from 'antd';
import { IPageComponentColumn } from '../../types';
import PageComponentProps from '../PageComponentProps';

export default function SelectComponent({ component, isLoading, objectData, onChange }: PageComponentProps) {
    // TODO: Multiselect
    // TODO: Page conditions (hasEvents: true)

    const rules = [
        {
            required: component.data.isRequired,
            message: 'This field is required'
        }
    ];

    // TODO: isLoading === 'validating'
    const validationStatus = component.data.isValid
        ? undefined
        : 'error';

    const formProps = {
        initialValues: {
            [component.id]: objectData?.filter(o => o.isSelected).map(o => o.internalId)
        }
    };

    const inputProps = {
        disabled: isLoading,
        loading: isLoading,
        onChange: (value: string) => {
            const found = objectData?.find(object => object.internalId === value);

            return onChange({
                objectData: found ? [found] : []
            });
        },
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
                <Select.Option value={ object.internalId }>
                    { label?.contentValue }
                </Select.Option>
            )
        });
    }

    return (
        <Form {...formProps} layout="vertical">
            <Form.Item
                hasFeedback={ !!validationStatus }
                help={ component.data.validationMessage }
                label={ component.label }
                name={ component.id }
                rules={ rules }
                validateStatus={ validationStatus }
            >
                <Select { ...inputProps } style={ { width: 180 } }>
                    { options }
                </Select>
            </Form.Item>
        </Form>
    )
}
