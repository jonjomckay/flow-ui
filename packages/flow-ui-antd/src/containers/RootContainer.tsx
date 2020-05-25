import * as React from 'react';
import { Layout } from 'antd';

interface Props {
    children: React.ReactNode
}

export default function RootContainer(props: Props): React.ReactNode {
    return (
        <Layout>
            <Layout.Content className="container" style={ { padding: '1.5rem 50px', width: '1280px' } }>
                { props.children }
            </Layout.Content>
        </Layout>
    )
}
