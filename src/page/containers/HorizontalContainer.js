import React from 'react';
import { Col, Row, Typography } from 'antd';

const HorizontalContainer = props => {
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
