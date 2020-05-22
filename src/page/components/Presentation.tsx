import * as React from 'react';
import { IPageComponentProps } from '../PageComponent';

export default function Presentation(props: IPageComponentProps) {
    return <div dangerouslySetInnerHTML={ { __html: props.component.data.content } } />;
}
