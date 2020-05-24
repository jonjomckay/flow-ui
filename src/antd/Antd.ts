import * as React from 'react';
import RootContainer from './containers/RootContainer';
import ITheme from '../ITheme';
import Alert from './common/Alert';
import Loader from './common/Loader';
import Navigation from './navigation/Navigation';
import GroupContainer from './containers/GroupContainer';
import HorizontalContainer from './containers/HorizontalContainer';
import InlineContainer from './containers/InlineContainer';
import VerticalContainer from './containers/VerticalContainer';

import './Antd.less';

const Antd: ITheme = {
    alertComponent: Alert,
    components: {
        'CONTENT': React.lazy(() => import('./components/Content')),
        'IMAGE': React.lazy(() => import('../antd/components/Image')),
        'INPUT': React.lazy(() => import('../antd/components/Input')),
        'LIST':  React.lazy(() => import('../antd/components/List')),
        'OUTCOMES': React.lazy(() => import('../antd/components/Outcomes')),
        'PRESENTATION': React.lazy(() => import('../antd/components/Presentation')),
        'RADIO': React.lazy(() => import('../antd/components/Radio')),
        'SELECT': React.lazy(() => import('../antd/components/SelectComponent')),
        'TABLE': React.lazy(() => import('../antd/components/Table')),
        'TEXTAREA': React.lazy(() => import('../antd/components/Textarea')),
        'TOGGLE': React.lazy(() => import('../antd/components/Toggle')),
    },
    containers: {
        'GROUP': GroupContainer,
        'HORIZONTAL_FLOW': HorizontalContainer,
        'INLINE_FLOW': InlineContainer,
        'VERTICAL_FLOW': VerticalContainer
    },
    loaderComponent: Loader,
    navigation: Navigation,
    rootContainer: RootContainer
}

export default Antd;
