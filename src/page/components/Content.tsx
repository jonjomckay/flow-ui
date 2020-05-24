import React, { useRef } from 'react';
import JoditEditor from './JoditEditor'
import PageComponentProps from '../PageComponentProps';
import BaseFormItem from './BaseFormItem';

export default function Content(props: PageComponentProps) {
    const editor = useRef();
    const config = {
        readonly: false
    };

    const onChange = (value: string) => {
        props.onChange({
            contentValue: value
        });
    }

    const editorProps = {
        config: config,
        onChange: onChange,
        ref: editor,
        value: props.component.data.contentValue
    }

    return (
        <BaseFormItem component={ props.component }>
            <JoditEditor { ...editorProps } />
        </BaseFormItem>
    );
}
