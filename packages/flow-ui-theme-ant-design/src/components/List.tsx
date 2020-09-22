import * as React from 'react';
import { Typography } from 'antd';
import { ListProps } from '@jonjomckay/flow-ui';

export default function List(props: ListProps): React.ReactElement<ListProps> | null {
    const data = props.list.map(item => {
        return (
            <li key={ item.key }>
                { item.value }
            </li>
        )
    });

    let list;
    if (props.isOrdered) {
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
                { props.label }
            </Typography.Title>

            { list }
        </div>
    );
}
