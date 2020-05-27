import * as React from 'react';
import { PageComponentProps } from '@jonjomckay/flow-ui';

export default function Presentation(props: PageComponentProps): React.ReactElement<PageComponentProps> {
    return <div dangerouslySetInnerHTML={ { __html: props.component.data.content } } />;
}
