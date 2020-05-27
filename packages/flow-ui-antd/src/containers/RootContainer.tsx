import * as React from 'react';
import { Layout } from 'antd';
import { PageContainerProps } from '@jonjomckay/flow-ui';

interface Props {
    children: React.ReactElement<PageContainerProps>
}

export default function RootContainer(props: Props): React.ReactElement<PageContainerProps> {
    return (
        <Layout>
            <Layout.Content className="container" style={ { padding: '1.5rem 50px', width: '1280px' } }>
                { props.children }
            </Layout.Content>
        </Layout>
    )
}
