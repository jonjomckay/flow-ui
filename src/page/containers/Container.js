import React from 'react';
import { Space } from 'antd';

const Container = props => {
    return (
        <Space direction={ props.direction }>
            { props.containers }
            { props.components }
        </Space>
    );
};

export default Container;
