import React from 'react';
import { Col, Row, Typography } from 'antd';
import PageContainerProps from '../../page/PageContainerProps';

const HorizontalContainer = (props: PageContainerProps): React.ReactNode => {
    return (
        <div>
            <Typography.Title> { props.container.label }</Typography.Title>

            <Row>
                { props.components.map((component, i) => (
                    <Col key={ i }>
                        { component }
                    </Col>
                )) }
                { props.containers }
            </Row>
        </div>
    );
};

export default HorizontalContainer;
