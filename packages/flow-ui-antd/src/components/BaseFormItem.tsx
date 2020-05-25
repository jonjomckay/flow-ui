import * as React from 'react';
import { Form } from 'antd';
import { IPageComponent } from '../../types';

interface Props {
    children: React.ReactNode
    component: IPageComponent
}

export default function BaseFormItem({ children, component }: Props): React.ReactNode {
    if (component.data.isVisible === false) {
        return null;
    }

    const formProps = {
        initialValues: {
            [component.id]: component.data.contentValue
        }
    };

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

    return (
        <Form { ...formProps } layout="vertical">
            <Form.Item
                extra={ component.helpInfo }
                hasFeedback={ !!validationStatus }
                help={ component.data.validationMessage }
                label={ component.label }
                name={ component.id }
                rules={ rules }
                validateStatus={ validationStatus }>
                { children }
            </Form.Item>
        </Form>
    );
}
