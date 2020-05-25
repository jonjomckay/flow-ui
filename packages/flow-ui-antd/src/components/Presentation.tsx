import * as React from 'react';
import PageComponentProps from '../../page/PageComponentProps';

export default function Presentation(props: PageComponentProps) {
    return <div dangerouslySetInnerHTML={ { __html: props.component.data.content } } />;
}
