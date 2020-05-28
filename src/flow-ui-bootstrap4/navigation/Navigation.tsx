import React from 'react';
import { selectNavigationItem, NavigationProps, RootState, SelectNavigationItemProps } from '../../flow-ui';
import { Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';

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

        const onClick = () => props.selectNavigationItem(selection);

        return <Nav.Link active={ item.data.isCurrent } key={ item.id } onClick={ onClick }>{ item.label }</Nav.Link>
    });

    const selectedItemKeys = props.items
        .filter(item => item.data.isCurrent)
        .map(item => item.id);

    return (
        <Navbar expand="lg">
            <Navbar.Brand>
                { props.navigation.label }
            </Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    { items }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
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
