import * as React from 'react';
import { Layout } from 'antd';
import { RootContainerProps } from '@jonjomckay/flow-ui';
import './RootContainer.less';

export default function RootContainer(props: RootContainerProps): React.ReactElement {
    return (
        <Layout>
            <Layout.Content className="container" style={ { padding: '1.5rem 50px', width: '1280px' } }>
                { props.children }
            </Layout.Content>
        </Layout>
    )
}
