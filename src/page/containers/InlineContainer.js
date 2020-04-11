import React from 'react';
import { Space } from 'antd';

const InlineContainer = props => {
    return (
        <Space direction="horizontal">
            { props.components }
        </Space>
    );
};

export default InlineContainer;
