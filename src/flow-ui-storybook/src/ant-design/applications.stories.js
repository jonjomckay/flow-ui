import React from 'react';
import { Flow } from '@jonjomckay/flow-ui';
import AntDesign from '@jonjomckay/flow-ui-theme-ant-design';

import 'antd/dist/antd.css';

export default { title: 'Ant Design/Applications' };

export const courseRegistration = () => (
    <Flow theme={ AntDesign }
          tenant="1e6ba809-b1f7-4118-91c1-a5a6e7092ced"
          id="b7e2a056-35dd-4973-b279-c85aeafb299c"
          version="d3010f30-0f38-4a1e-bb8f-8700c0a6d31d" />
);

export const quickApp = () => (
    <Flow theme={ AntDesign }
          tenant="07f799a4-af7c-449b-ba7c-f1f526f7000a"
          id="c6b211f0-b342-4f67-b7b1-b8b62868b2a4" />
)
