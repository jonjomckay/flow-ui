import * as React from 'react';
import { connect } from 'react-redux';
import selectNavigationItem from '../actions/selectNavigationItem';
import { RootState } from '../store';
import ITheme from '../theme/ITheme';
import NavigationProps from './NavigationProps';

type Props = NavigationProps & {
    theme: ITheme;
}

function Navigation(props: Props): React.ReactElement<NavigationProps> {
    // Create the navigation using the component in the theme
    return React.createElement(props.theme.navigationComponent, props);
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
