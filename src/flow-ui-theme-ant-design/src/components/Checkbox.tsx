import * as React from 'react';
import { PageComponentProps } from '@jonjomckay/flow-ui';
import { Checkbox as AntdCheckbox } from 'antd';
import BaseFormItem from './BaseFormItem';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

export default function Checkbox(props: PageComponentProps): React.ReactElement<PageComponentProps> {
    const checked = String(props.component.data.contentValue.toLowerCase()) === 'true';

    const onChange = (checked: CheckboxChangeEvent) => {
        props.onChange({
            contentValue: checked.target.checked.toString()
        });
    }

    const checkboxProps = {
        defaultChecked: checked,
        disabled: !props.component.data.isEnabled,
        loading: props.isLoading,
        onChange: onChange,
        title: props.component.label
    }

    return (
        <BaseFormItem component={ props.component }>
            <AntdCheckbox { ...checkboxProps } />
        </BaseFormItem>
    )
}
