import React from 'react';
import { Space } from 'antd';
import PageContainerProps from '../../page/PageContainerProps';

const InlineContainer = (props: PageContainerProps) => {
    return (
        <Space direction="horizontal">
            { props.components }
        </Space>
    );
};

export default InlineContainer;
