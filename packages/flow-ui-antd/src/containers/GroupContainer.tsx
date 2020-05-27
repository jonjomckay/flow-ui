import React from 'react';
import { Tabs } from 'antd';
import { PageContainerProps } from '@jonjomckay/flow-ui';

const GroupContainer = (props: PageContainerProps): React.ReactElement<PageContainerProps> => {
    // Create a tab per nested container, and use the pre-rendered containers that were passed in for each tab's content
    const tabs = (props.container.pageContainerResponses || []).map((tab, i) => {
        return (
            <Tabs.TabPane key={ tab.id } tab={ tab.label }>
                { props.containers[i] }
            </Tabs.TabPane>
        )
    });

    return (
        <Tabs>
            { props.components }
            { tabs }
        </Tabs>
    );
};

export default GroupContainer;
