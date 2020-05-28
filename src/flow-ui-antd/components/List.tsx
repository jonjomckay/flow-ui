import * as React from 'react';
import { Typography } from 'antd';
import { PageComponentProps } from '../../flow-ui';
export default function List(props: PageComponentProps): React.ReactElement<PageComponentProps> | null {
    const titleColumn = props.component.columns.find(c => c.order === 0);
    if (!titleColumn) {
        console.warn('No title column was provided for the List component ' + props.component.id);
        return null;
    }

    const data = props.objectData?.map(objectData => {
        const titleProperty = objectData.properties.find(p => p.typeElementPropertyId === titleColumn.typeElementPropertyToDisplayId);

        return (
            <li key={ objectData.internalId }>
                { titleProperty?.contentValue }
            </li>
        )
    });

    let list;

    const isOrdered = props.component.attributes && props.component.attributes['ordered'];
    if (isOrdered) {
        list = (
            <ol>
                { data }
            </ol>
        );
    } else {
        list = (
            <ul>
                { data }
            </ul>
        )
    }

    return (
        <div className="list">
            <Typography.Title level={ 4 }>
                { props.component.label }
            </Typography.Title>

            { list }
        </div>
    );
}
