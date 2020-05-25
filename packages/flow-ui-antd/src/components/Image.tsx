import * as React from 'react';
import PageComponentProps from '../../page/PageComponentProps';

export default function Image(props: PageComponentProps): React.ReactNode {
    return <img alt={ props.component.label }
                height={ props.component.height }
                src={ props.component.data.imageUri }
                width={ props.component.width }
    />
}
