import * as React from 'react';
import { LoaderProps } from '../../flow-ui';
import { Spinner } from 'react-bootstrap';

export default function Loader(props: LoaderProps) {
    return <Spinner animation="border" />
}
