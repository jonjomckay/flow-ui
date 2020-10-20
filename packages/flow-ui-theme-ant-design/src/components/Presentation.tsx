import * as React from 'react';
import { PresentationProps } from '@jonjomckay/flow-ui';

export default function Presentation(props: PresentationProps): React.ReactElement<PresentationProps> {
    return <div dangerouslySetInnerHTML={ { __html: props.content } } />;
}
