import React from 'react';
import { connect } from 'react-redux';
import PageComponent from '../PageComponent';
import { Space } from 'antd';

const VerticalFlow = props => {
    const components = props.components.map(component => {
        return (
            <PageComponent component={ component } key={ component.id } />
        )
    });

    return (
        <Space direction="vertical">
            { components }
        </Space>
    );
};


const mapStateToProps = (state, ownProps) => ({
    components: state.page.pageComponents.filter(component => component.pageContainerId === ownProps.container.id).sort((a, b) => b.order - a.order)
});

export default connect(mapStateToProps)(VerticalFlow);
