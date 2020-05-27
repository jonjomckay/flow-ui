import React from 'react';
import { Col } from 'react-bootstrap';
import { PageContainerProps } from '@jonjomckay/flow-ui';

const VerticalContainer = (props: PageContainerProps): React.ReactElement<PageContainerProps> => {
    return (
        <Col flex="auto">
            {/*<Space direction="vertical" size={ 0 }>*/}
                <h3> { props.container.label }</h3>
                { props.components }
                { props.containers }
            {/*</Space>*/}
        </Col>
    );
};

export default VerticalContainer;
