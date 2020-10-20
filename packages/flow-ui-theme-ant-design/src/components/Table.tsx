import * as React from 'react';
import { Table as AntdTable, Typography } from 'antd';
import { IObjectData, PageComponentProps, TableProps } from '@jonjomckay/flow-ui';
import { RowSelectionType } from 'antd/es/table/interface';

export default function Table(props: TableProps): React.ReactElement<TableProps> {
    const columns = props.component.columns.map(column => {
        return {
            title: column.label,
          // eslint-disable-next-line react/display-name
            render: (text: string, record: IObjectData) => {
                const propertyId = column.typeElementPropertyToDisplayId || column.typeElementPropertyId;

                const property = record.properties.find(p => p.typeElementPropertyId === propertyId);
                if (property) {
                    return (
                        <div key={ record.internalId }>
                            { property.contentValue }
                        </div>
                    )
                }

                console.warn('The column ' + column.developerName + ' is trying to display a property (' + propertyId + ') that does not exist in the object data');
                return null;
            }
        }
    });

    const rowSelectionType: RowSelectionType = props.component.isMultiSelect
        ? 'checkbox'
        : 'radio';

    const rowSelection = {
        onSelect: (record: IObjectData, selected: boolean) => {
            props.onChange(props.data?.map(o => {
                if (o.internalId === record.internalId) {
                    return {
                        ...o,
                        isSelected: selected
                    }
                }

                // If this table is multiselect, we don't need to invert the selection of the other items
                if (props.component.isMultiSelect) {
                    return o;
                }

                // This table isn't a multiselect one, so we need to invert the selection status of every other item
                return {
                    ...o,
                    isSelected: !selected
                };
            }))
        },
        selectedRowKeys: props.data?.filter(o => o.isSelected).map(o => o.internalId),
        type: rowSelectionType
    };

    return (
        <div className="table">
            <Typography.Title level={ 4 }>
                { props.component.label }
            </Typography.Title>

            <AntdTable columns={ columns }
                       dataSource={ props.data }
                       rowKey="internalId"
                       rowSelection={ { ...rowSelection } }
            />
        </div>
    );
}
