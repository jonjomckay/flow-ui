import * as React from 'react';
import { Alert as AntdAlert } from 'antd';
import AlertProps from '../../common/AlertProps';

export default function Alert(props: AlertProps) {
    return <AntdAlert description={ props.message } message={ props.title } showIcon type={ props.type } />
}
