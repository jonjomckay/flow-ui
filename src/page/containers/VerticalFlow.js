import React from 'react';
import { connect } from 'react-redux';
import PageComponent from '../PageComponent';

const VerticalFlow = props => {
    const components = props.components.map(component => {
        return (
            <PageComponent component={ component } key={ component.id } />
        )
    });

    return (
        <>
            { components }
        </>
    );
};


const mapStateToProps = (state, ownProps) => ({
    components: state.page.pageComponents.filter(component => component.pageContainerId === ownProps.container.id).sort((a, b) => b.order - a.order)
});

export default connect(mapStateToProps)(VerticalFlow);
