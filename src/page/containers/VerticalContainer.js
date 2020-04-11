import React from 'react';
import { Col, Row, Space, Typography } from 'antd';

const VerticalContainer = props => {
    return (
        <Col flex="auto">
            <Space direction="vertical" size={ 0 }>
                <Typography.Title> { props.container.label }</Typography.Title>
                { props.containers }
                { props.components }
            </Space>
        </Col>
    );
};

export default VerticalContainer;
