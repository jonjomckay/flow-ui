import React, { useRef } from 'react';
import JoditEditor from './JoditEditor'
import { ContentProps, PageComponentProps } from '@jonjomckay/flow-ui';
import BaseFormItem from './BaseFormItem';

export default function Content(props: ContentProps): React.ReactElement<PageComponentProps> {
    const editor = useRef();
    const config = {
        readonly: false
    };

    const onChange = (value: string) => {
        props.onChange(value);
    }

    const editorProps = {
        config: config,
        onChange: onChange,
        ref: editor,
        value: props.value
    }

    return (
        <BaseFormItem component={ props.component }>
            <JoditEditor { ...editorProps } />
        </BaseFormItem>
    );
}
