import * as React from 'react';
import { Form, Input as AntdInput, InputNumber } from 'antd';
import PageComponentProps from '../PageComponentProps';

export default function Input({ component, onChange }: PageComponentProps) {
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
            [component.id]: component.data.contentValue
        }
    };

    const inputProps = {
        placeholder: component.hintValue,
        required: component.data.isRequired,
        maxLength: component.size
    };

    let input;
    switch (component.contentType.toLowerCase()) {
        case 'contentnumber':
            input =
                <InputNumber { ...inputProps } onChange={ value => onChange({ contentValue: value?.toString() }) } />;
            break;
        default:
            input =
                <AntdInput { ...inputProps } onChange={ (e) => onChange({ contentValue: e.currentTarget.value }) } />;
            break;
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
                { input }
            </Form.Item>
        </Form>
    );
}
