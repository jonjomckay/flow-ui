import React from 'react';
import { Col, Space, Typography } from 'antd';
import PageContainerProps from '../PageContainerProps';

const VerticalContainer = (props: PageContainerProps) => {
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
