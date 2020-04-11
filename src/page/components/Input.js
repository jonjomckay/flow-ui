import React from 'react';
import { Form, Input as AntdInput, InputNumber } from 'antd';

export default class Input extends React.Component {
    render() {
        const { component, onChange } = this.props;

        const rules = [
            {
                required: component.data.isRequired,
                message: 'This field is required'
            }
        ];

        // TODO: isLoading === 'validating'
        const validationStatus = component.data.isValid
            ? null
            : 'error';

        const inputProps = {
            placeholder: component.hintValue,
            required: component.data.isRequired,
            maxLength: component.size
        };

        let input;
        switch (component.contentType.toLowerCase()) {
            case 'contentnumber':
                input = <InputNumber { ...inputProps } onChange={ value => onChange(value) } />;
                break;
            default:
                input = <AntdInput { ...inputProps } onChange={ (e) => onChange(e.currentTarget.value) } />;
                break;
        }

        return (
            <Form layout="vertical">
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
}
