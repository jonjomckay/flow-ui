import * as React from 'react';
import PageComponentProps from '../../page/PageComponentProps';

export default function Presentation(props: PageComponentProps): React.ReactNode {
    return <div dangerouslySetInnerHTML={ { __html: props.component.data.content } } />;
}
