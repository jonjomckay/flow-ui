import * as React from 'react';
import { ITheme } from '@jonjomckay/flow-ui';

import './index.less';

const AntDesign: ITheme = {
    alertComponent: React.lazy(() => import(/* webpackChunkName: 'antd.alert' */ './alert/Alert')),
    components: {
        'CHECKBOX': React.lazy(() => import(/* webpackChunkName: 'antd.component.checkbox' */ './components/Checkbox')),
        'CONTENT': React.lazy(() => import(/* webpackChunkName: 'antd.component.content' */ './components/Content')),
        'IMAGE': React.lazy(() => import(/* webpackChunkName: 'antd.component.image' */ './components/Image')),
        'INPUT': React.lazy(() => import(/* webpackChunkName: 'antd.component.input' */ './components/Input')),
        'LIST': React.lazy(() => import(/* webpackChunkName: 'antd.component.list' */ './components/List')),
        'OUTCOMES': React.lazy(() => import(/* webpackChunkName: 'antd.component.outcomes' */ './components/Outcomes')),
        'PRESENTATION': React.lazy(() => import(/* webpackChunkName: 'antd.component.presentation' */ './components/Presentation')),
        'RADIO': React.lazy(() => import(/* webpackChunkName: 'antd.component.radio' */ './components/Radio')),
        'SELECT': React.lazy(() => import(/* webpackChunkName: 'antd.component.select' */ './components/SelectComponent')),
        'TABLE': React.lazy(() => import(/* webpackChunkName: 'antd.component.table' */ './components/Table')),
        'TEXTAREA': React.lazy(() => import(/* webpackChunkName: 'antd.component.textarea' */ './components/Textarea')),
        'TOGGLE': React.lazy(() => import(/* webpackChunkName: 'antd.component.toggle' */ './components/Toggle')),
    },
    containers: {
        'GROUP': React.lazy(() => import(/* webpackChunkName: 'antd.container.group' */ './containers/GroupContainer')),
        'HORIZONTAL_FLOW': React.lazy(() => import(/* webpackChunkName: 'antd.container.horizontal' */ './containers/HorizontalContainer')),
        'INLINE_FLOW': React.lazy(() => import(/* webpackChunkName: 'antd.container.inline' */ './containers/InlineContainer')),
        'VERTICAL_FLOW': React.lazy(() => import(/* webpackChunkName: 'antd.container.vertical' */ './containers/VerticalContainer'))
    },
    loaderComponent: React.lazy(() => import(/* webpackChunkName: 'antd.loader' */ './loader/Loader')),
    navigationComponent: React.lazy(() => import(/* webpackChunkName: 'antd.navigation' */ './navigation/Navigation')),
    notificationsComponent: React.lazy(() => import(/* webpackChunkName: 'antd.notifications' */ './notification/Notifications')),
    outcomesComponent: React.lazy(() => import(/* webpackChunkName: 'antd.outcomes' */ './components/OutcomesList')),
    rootContainer: React.lazy(() => import(/* webpackChunkName: 'antd.container.root' */ './containers/RootContainer'))
}

export default AntDesign;
