import * as React from 'react';
import { PageComponentProps } from '../../flow-ui';
import { Switch } from 'antd';
import BaseFormItem from './BaseFormItem';

export default function Toggle(props: PageComponentProps): React.ReactElement<PageComponentProps> {
    const toggled = String(props.component.data.contentValue.toLowerCase()) === 'true';

    const onChange = (checked: boolean) => {
        props.onChange({
            contentValue: checked.toString()
        });
    }

    const switchProps = {
        defaultChecked: toggled,
        disabled: !props.component.data.isEnabled,
        loading: props.isLoading,
        onChange: onChange,
        title: props.component.label
    }

    return (
        <BaseFormItem component={ props.component }>
            <Switch { ...switchProps } />
        </BaseFormItem>
    )
}
