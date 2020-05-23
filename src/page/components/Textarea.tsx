import * as React from 'react';
import { Form, Input } from 'antd';
import PageComponentProps from '../PageComponentProps';

export default function Textarea({ component, onChange }: PageComponentProps) {
    if (component.data.isVisible === false) {
        return null;
    }

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
        cols: component.width,
        disabled: component.data.isEnabled === false,
        maxLength: component.maxSize,
        placeholder: component.hintValue,
        readOnly: component.data.isEditable === false,
        required: component.data.isRequired,
        rows: component.height,
    };

    return (
        <Form { ...formProps } layout="vertical">
            <Form.Item
                extra={ component.helpInfo }
                hasFeedback={ !!validationStatus }
                help={ component.data.validationMessage }
                label={ component.label }
                name={ component.id }
                rules={ rules }
                validateStatus={ validationStatus }
            >
                <Input.TextArea { ...inputProps }
                                onChange={ value => onChange({ contentValue: value.currentTarget.value }) } />
            </Form.Item>
        </Form>
    );
}
