import React from 'react';
import { connect } from 'react-redux';
import PageContainer from './PageContainer';
import Outcomes from '../outcomes/Outcomes';

const Page = props => {
    const containers = props.containers
        .sort((a, b) => b.order - a.order)
        .map(container => <PageContainer container={ container } key={ container.id } />);

    return (
        <div>
            { containers }

            <Outcomes />
        </div>
    );
};

const mapStateToProps = state => ({
    containers: state.page.pageContainers
});

export default connect(mapStateToProps)(Page);
