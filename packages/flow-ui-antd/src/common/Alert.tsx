import * as React from 'react';
import { Alert as AntdAlert } from 'antd';
import { AlertProps } from '@project/flow-ui';

export default function Alert(props: AlertProps): React.ReactNode {
    return <AntdAlert description={ props.message } message={ props.title } showIcon type={ props.type } />
}
