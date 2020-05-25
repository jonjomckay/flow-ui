import * as React from 'react';
import { Spin } from 'antd';

export default function Loader(): React.ReactNode {
    return <Spin delay={ 200 } />
}
