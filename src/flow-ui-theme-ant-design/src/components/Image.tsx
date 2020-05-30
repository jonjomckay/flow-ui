import * as React from 'react';
import { PageComponentProps } from '@jonjomckay/flow-ui';
export default function Image(props: PageComponentProps): React.ReactElement<PageComponentProps> {
    return <img alt={ props.component.label }
                height={ props.component.height }
                src={ props.component.data.imageUri }
                width={ props.component.width }
    />
}
