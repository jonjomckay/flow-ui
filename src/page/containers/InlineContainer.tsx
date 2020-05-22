import React from 'react';
import { Space } from 'antd';
import PageContainerProps from '../PageContainerProps';

const InlineContainer = (props: PageContainerProps) => {
    return (
        <Space direction="horizontal">
            { props.components }
        </Space>
    );
};

export default InlineContainer;
