import * as React from 'react';
import PageComponentProps from '../PageComponentProps';

export default function Presentation(props: PageComponentProps) {
    return <div dangerouslySetInnerHTML={ { __html: props.component.data.content } } />;
}
