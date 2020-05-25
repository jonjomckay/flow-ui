import React from 'react';
import { Space } from 'antd';
import PageContainerProps from '../../page/PageContainerProps';

const InlineContainer = (props: PageContainerProps): React.ReactNode => {
    return (
        <Space direction="horizontal">
            { props.components }
        </Space>
    );
};

export default InlineContainer;
