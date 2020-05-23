import React from 'react';
import { Menu } from 'antd';
import { connect } from 'react-redux';
import { selectNavigationItem, SelectNavigationItemProps } from '../actions';
import { RootState } from '../store';
import { INavigationItem } from '../types';

interface Props {
    id: string
    items: INavigationItem[]
    navigation: any

    selectNavigationItem(payload: SelectNavigationItemProps): void
}

function Navigation(props: Props) {
    // TODO: Why is this here? For flows with no navigation?
    if (!props.navigation) {
        return null;
    }

    // TODO: Nested navigation
    const items = props.items.map(item => {
        const selection: SelectNavigationItemProps = {
            navigationId: props.id,
            itemId: item.id
        };

        return <Menu.Item key={ item.id }
                          onClick={ () => props.selectNavigationItem(selection) }>{ item.label }</Menu.Item>
    });

    const selectedItemKeys = props.items
        .filter(item => item.data.isCurrent)
        .map(item => item.id);

    return (
        <Menu theme="dark" mode="horizontal" selectedKeys={ selectedItemKeys }>
            { items }
        </Menu>
    )
}

const mapStateToProps = (state: RootState) => ({
    id: state.navigation.id,
    items: state.navigation.items,
    navigation: state.navigation.navigation
});

const mapDispatchToProps = ({
    selectNavigationItem
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
