import * as React from 'react';
import PageComponentProps from '../PageComponentProps';

export default function Image(props: PageComponentProps) {
    console.log(props);
    return <img alt={ props.component.label }
                height={ props.component.height }
                src={ props.component.data.imageUri }
                width={ props.component.width }
    />
}
