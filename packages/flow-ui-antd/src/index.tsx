import * as React from 'react';
import RootContainer from './containers/RootContainer';
import { ITheme } from '@jonjomckay/flow-ui';
import Alert from './common/Alert';
import Loader from './loader/Loader';
import Navigation from './navigation/Navigation';
import Notifications from './notification/Notifications';
import GroupContainer from './containers/GroupContainer';
import HorizontalContainer from './containers/HorizontalContainer';
import InlineContainer from './containers/InlineContainer';
import VerticalContainer from './containers/VerticalContainer';

import './index.less';
import { OutcomesList } from './components/Outcomes';

const Antd: ITheme = {
  alertComponent: Alert,
  components: {
    'CONTENT': React.lazy(() => import('./components/Content')),
    'IMAGE': React.lazy(() => import('./components/Image')),
    'INPUT': React.lazy(() => import('./components/Input')),
    'LIST': React.lazy(() => import('./components/List')),
    'OUTCOMES': React.lazy(() => import('./components/Outcomes')),
    'PRESENTATION': React.lazy(() => import('./components/Presentation')),
    'RADIO': React.lazy(() => import('./components/Radio')),
    'SELECT': React.lazy(() => import('./components/SelectComponent')),
    'TABLE': React.lazy(() => import('./components/Table')),
    'TEXTAREA': React.lazy(() => import('./components/Textarea')),
    'TOGGLE': React.lazy(() => import('./components/Toggle')),
  },
  containers: {
    'GROUP': GroupContainer,
    'HORIZONTAL_FLOW': HorizontalContainer,
    'INLINE_FLOW': InlineContainer,
    'VERTICAL_FLOW': VerticalContainer
  },
  loaderComponent: Loader,
  navigationComponent: Navigation,
  notificationsComponent: Notifications,
  outcomesComponent: OutcomesList,
  rootContainer: RootContainer
}

export default Antd;
