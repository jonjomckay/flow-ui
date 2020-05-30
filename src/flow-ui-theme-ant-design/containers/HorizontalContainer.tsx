import React from 'react';
import { Col, Row, Typography } from 'antd';
import { PageContainerProps } from '../../flow-ui';

const HorizontalContainer = (props: PageContainerProps): React.ReactElement<PageContainerProps> => {
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
