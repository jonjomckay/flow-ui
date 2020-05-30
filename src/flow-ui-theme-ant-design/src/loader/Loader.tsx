import * as React from 'react';
import { Spin } from 'antd';
import { LoaderProps } from '@jonjomckay/flow-ui';

export default function Loader(props: LoaderProps): React.ReactElement<LoaderProps> {
    return <Spin delay={ 200 } />
}
