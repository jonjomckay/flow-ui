import * as React from 'react';
import { Form, Input } from 'antd';
import { IPageComponentProps } from '../PageComponent';

export default class Textarea extends React.Component<IPageComponentProps> {
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
            ? undefined
            : 'error';

        const inputProps = {
            placeholder: component.hintValue,
            required: component.data.isRequired
        };

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
                    <Input.TextArea { ...inputProps } onChange={ value => onChange({ contentValue: value.currentTarget.value }) } />
                </Form.Item>
            </Form>
        );
    }
}
