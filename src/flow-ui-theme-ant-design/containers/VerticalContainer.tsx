import React from 'react';
import { Col, Space, Typography } from 'antd';
import { PageContainerProps } from '../../flow-ui';

const VerticalContainer = (props: PageContainerProps): React.ReactElement<PageContainerProps> => {
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
