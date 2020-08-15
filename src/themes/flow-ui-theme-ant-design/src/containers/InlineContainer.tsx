import React from 'react';
import { Space } from 'antd';
import { PageContainerProps } from '@jonjomckay/flow-ui';

const InlineContainer = (props: PageContainerProps): React.ReactElement<PageContainerProps> => {
    return (
        <Space direction="horizontal">
            { props.components }
        </Space>
    );
};

export default InlineContainer;
