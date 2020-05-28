import * as React from 'react';
import { PageContainerProps } from '../../flow-ui';
import { Container } from 'react-bootstrap';

interface Props {
    children: React.ReactElement<PageContainerProps>
}

export default function RootContainer(props: Props): React.ReactElement<PageContainerProps> {
    return (
        <Container fluid>
            { props.children }
        </Container>
    )
}
