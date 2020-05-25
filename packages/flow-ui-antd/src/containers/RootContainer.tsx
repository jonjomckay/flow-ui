import * as React from 'react';
import { Layout } from 'antd';

interface Props {
    children: React.ReactNode
}

export default class RootContainer extends React.Component<Props> {
    render() {
        return (
            <Layout>
                <Layout.Content className="container" style={ { padding: '1.5rem 50px', width: '1280px' } }>
                    { this.props.children }
                </Layout.Content>
            </Layout>
        )
    }
}
