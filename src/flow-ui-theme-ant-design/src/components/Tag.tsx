import * as React from 'react';
import { Tag as AntdTag } from 'antd';
import { PageComponentProps } from '@jonjomckay/flow-ui';

export default function Tag(props: PageComponentProps): React.ReactElement<PageComponentProps> {
    let color;
    if (props.component.attributes && props.component.attributes.type) {
        switch (props.component.attributes.type.toLowerCase()) {
            case 'error':
                color = 'error';
                break;
            case 'success':
                color = 'success';
                break;
            default:
                color = props.component.attributes.type;
                break;
        }
    }

    return <AntdTag color={ color }>{ props.component.data.contentValue }</AntdTag>
}
