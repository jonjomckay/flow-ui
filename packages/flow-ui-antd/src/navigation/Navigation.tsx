import React from 'react';
import { Layout, Menu } from 'antd';
import { connect } from 'react-redux';
import { selectNavigationItem, NavigationProps, RootState, SelectNavigationItemProps } from '@project/flow-ui';

function Navigation(props: NavigationProps) {
    if (props.navigation === null) {
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
        <Layout.Header>
            <Menu theme="dark" mode="horizontal" selectedKeys={ selectedItemKeys }>
                { items }
            </Menu>
        </Layout.Header>
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
