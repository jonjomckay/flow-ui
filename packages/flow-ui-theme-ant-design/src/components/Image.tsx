import * as React from 'react';
import { ImageProps } from '@jonjomckay/flow-ui';

export default function Image(props: ImageProps): React.ReactElement<ImageProps> {
    return <img alt={ props.label }
                height={ props.height }
                src={ props.uri }
                width={ props.width }
    />
}
