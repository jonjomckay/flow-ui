import * as React from 'react';
import PageComponentProps from '../../page/PageComponentProps';
import { Radio as AntdRadio } from 'antd';
import BaseFormItem from './BaseFormItem';
import { RadioChangeEvent } from 'antd/es/radio';

export default function Radio(props: PageComponentProps) {
    const labelColumn = props.component.columns.find(c => c.order === 0);
    if (!labelColumn) {
        console.warn('No label column was provided for the Radio component ' + props.component.id);
        return null;
    }

    const onChange = (e: RadioChangeEvent) => {
        props.onChange({
            objectData: props.objectData?.map(objectData => {
                if (objectData.internalId === e.target.value) {
                    return {
                        ...objectData,
                        isSelected: e.target.checked
                    }
                }

                return objectData;
            })
        });
    }

    const radioGroupProps = {
        disabled: !props.component.data.isEnabled,
        loading: props.isLoading,
        onChange: onChange,
        title: props.component.label
    }

    const radioGroup = props.objectData?.map(objectData => {
        const labelProperty = objectData.properties.find(p => p.typeElementPropertyId === labelColumn.typeElementPropertyToDisplayId);

        return (
            <AntdRadio defaultChecked={ objectData.isSelected } key={ objectData.internalId } value={ objectData.internalId }>
                { labelProperty?.contentValue }
            </AntdRadio>
        )
    })

    return (
        <BaseFormItem component={ props.component }>
            <AntdRadio.Group { ...radioGroupProps }>
                { radioGroup }
            </AntdRadio.Group>
        </BaseFormItem>
    )
}
