import React from 'react';
import { Col, Row, Typography } from 'antd';
import PageContainerProps from '../../page/PageContainerProps';

const HorizontalContainer = (props: PageContainerProps) => {
    return (
        <div>
            <Typography.Title> { props.container.label }</Typography.Title>

            <Row>
                { props.components.map(component => (
                    <Col>
                        { component }
                    </Col>
                )) }
                { props.containers }
            </Row>
        </div>
    );
};

export default HorizontalContainer;
