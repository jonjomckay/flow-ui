import * as React from 'react';
import { Alert as AntdAlert } from 'antd';
import { AlertProps } from '@jonjomckay/flow-ui';
import './Alert.css';

export default function Alert(props: AlertProps): React.ReactElement<AlertProps> {
    return <AntdAlert description={ props.message } message={ props.title } showIcon type={ props.type } />
}
