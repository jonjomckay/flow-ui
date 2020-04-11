import React from 'react';
import { Menu } from 'antd';
import { connect } from 'react-redux';
import { selectNavigationItem } from '../actions';

class Navigation extends React.Component {
    render() {
        if (!this.props.navigation) {
            return null;
        }

        // TODO: Nested navigation
        const items = this.props.items.map(item => {
            const selection = {
                navigationId: this.props.id,
                itemId: item.id
            };

            return <Menu.Item key={ item.id } onClick={ () => this.props.selectNavigationItem(selection) }>{ item.label }</Menu.Item>
        });

        const selectedItemKeys = this.props.items
            .filter(item => item.data.isCurrent)
            .map(item => item.id);

        return (
            <Menu theme="dark" mode="horizontal" selectedKeys={ selectedItemKeys }>
                { items }
            </Menu>
        )
    }
}

const mapStateToProps = state => ({
    id: state.navigation.id,
    items: state.navigation.items,
    navigation: state.navigation.navigation
});

const mapDispatchToProps = ({
    selectNavigationItem
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
