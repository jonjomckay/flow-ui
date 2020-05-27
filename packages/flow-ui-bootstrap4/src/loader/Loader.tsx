import * as React from 'react';
import { LoaderProps } from '@jonjomckay/flow-ui';
import { Spinner } from 'react-bootstrap';

export default function Loader(props: LoaderProps) {
    return <Spinner animation="border" />
}
