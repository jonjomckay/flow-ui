import * as React from 'react';
import { Form } from 'antd';
import { IPageComponent, PageComponentProps } from '../../flow-ui';

interface Props {
    children: React.ReactElement<PageComponentProps>
    component: IPageComponent
}

export default function BaseFormItem({ children, component }: Props): React.ReactElement<PageComponentProps> | null {
    if (component.data.isVisible === false) {
        return null;
    }

    const formProps = {
        initialValues: {
            [component.id]: component.data.contentValue
        }
    };

    const formLayout = {
        labelCol: {
            span: 4
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

    const layout: any = component.attributes?.layout
        ? component.attributes.layout
        : 'vertical';

    return (
        <Form { ...formLayout } { ...formProps } layout={ layout }>
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
