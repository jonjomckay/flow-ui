import React from 'react';
import { Col, Row, Typography } from 'antd';
import PageContainerProps from '../PageContainerProps';

const HorizontalContainer = (props: PageContainerProps) => {
    return (
        <div>
            <Typography.Title> { props.container.label }</Typography.Title>

            <Row>
                { props.containers }
                { props.components.map(component => (
                    <Col>
                        { component }
                    </Col>
                )) }
            </Row>
        </div>
    );
};

export default HorizontalContainer;