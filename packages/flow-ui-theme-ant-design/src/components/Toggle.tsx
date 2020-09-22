import * as React from 'react';
import { ToggleProps } from '@jonjomckay/flow-ui';
import { Switch } from 'antd';
import BaseFormItem from './BaseFormItem';

export default function Toggle(props: ToggleProps): React.ReactElement<ToggleProps> {
    const switchProps = {
        defaultChecked: props.checked,
        disabled: !props.component.data.isEnabled,
        loading: props.isLoading,
        onChange: props.onChange,
        title: props.label
    }

    return (
        <BaseFormItem component={ props.component }>
            <Switch { ...switchProps } />
        </BaseFormItem>
    )
}
