import React from 'react';
import { Tabs } from 'antd';
import PageContainerProps from '../PageContainerProps';

const GroupContainer = (props: PageContainerProps) => {
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
            { tabs }
            { props.components }
        </Tabs>
    );
};

export default GroupContainer;