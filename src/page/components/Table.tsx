import * as React from 'react';
import { Table as AntdTable, Typography } from 'antd';
import PageComponentProps from '../PageComponentProps';
import { IObjectData } from '../../types';
import { RowSelectionType } from 'antd/es/table/interface';

export default function Table(props: PageComponentProps) {
    const columns = props.component.columns.map(column => {
        return {
            title: column.label,
            render: (text: string, record: IObjectData) => {
                const propertyId = column.typeElementPropertyToDisplayId || column.typeElementPropertyId;

                let property = record.properties.find(p => p.typeElementPropertyId === propertyId);
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
            props.onChange({
                objectData: props.objectData?.map(o => {
                    if (o.internalId === record.internalId) {
                        return {
                            ...o,
                            isSelected: selected
                        }
                    }

                    return o;
                })
            })
        },
        selectedRowKeys: props.objectData?.filter(o => o.isSelected).map(o => o.internalId),
        type: rowSelectionType
    };

    return (
        <div className="table">
            <Typography.Title level={ 4 }>
                { props.component.label }
            </Typography.Title>

            <AntdTable columns={ columns }
                       dataSource={ props.objectData }
                       rowKey="internalId"
                       rowSelection={ { ...rowSelection } }
            />
        </div>
    );
}
