import React from 'react';

export default function Presentation(props) {
    return <div dangerouslySetInnerHTML={ { __html: props.component.data.content } } />;
}
