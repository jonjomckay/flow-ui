import React from 'react';
import { Col, Space, Typography } from 'antd';
import PageContainerProps from '../../page/PageContainerProps';

const VerticalContainer = (props: PageContainerProps): React.ReactNode => {
    return (
        <Col flex="auto">
            <Space direction="vertical" size={ 0 }>
                <Typography.Title> { props.container.label }</Typography.Title>
                { props.components }
                { props.containers }
            </Space>
        </Col>
    );
};

export default VerticalContainer;
