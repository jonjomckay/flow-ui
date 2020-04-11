import React from 'react';
import { Form, Input as AntdInput } from 'antd';
import classNames from 'classnames';

export default class Input extends React.Component {
    render() {
        const { component } = this.props;

        const rules = [
            {
                required: component.data.isRequired
            }
        ];

        // TODO: isLoading === 'validating'
        const validationStatus = component.data.isValid
            ? 'success'
            : 'error';

        return (
            <Form layout="vertical">
                <Form.Item
                    hasFeedback={ component.data.isValid }
                    help={ component.validationMessage }
                    label={ component.label }
                    name={ component.id }
                    rules={ rules }
                    alidateStatus={ validationStatus }
                >
                    <AntdInput placeholder={ component.hintValue } required={ component.data.isRequired } />
                </Form.Item>
            </Form>
        );
    }
}
