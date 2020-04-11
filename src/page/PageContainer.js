import React from 'react';
import VerticalFlow from './containers/VerticalFlow';

const PageContainer = ({ container }) => {
    const { containerType } = container;

    const props = {
        components: [],
        container: container
    };

    switch (containerType) {
        case 'VERTICAL_FLOW':
            return <VerticalFlow { ...props } />;
        default:
            console.warn('The container type ' + containerType + ' is not supported');
            return null;
    }
};

export default PageContainer;
