import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.less';
import { ITheme } from '../flow-ui';
import Alert from './common/Alert';
import Loader from './loader/Loader';
import Notifications from './notification/Notifications';
import RootContainer from './containers/RootContainer';
import Navigation from './navigation/Navigation';
import { OutcomesList } from './components/Outcomes';

// import RootContainer from './containers/RootContainer';
// import Alert from './common/Alert';
// import Loader from './loader/Loader';
// import Navigation from './navigation/Navigation';
// import Notifications from './notification/Notifications';
// import GroupContainer from './containers/GroupContainer';
// import HorizontalContainer from './containers/HorizontalContainer';
// import InlineContainer from './containers/InlineContainer';
import VerticalContainer from './containers/VerticalContainer';

// import { OutcomesList } from './components/Outcomes';

const Bootstrap4: ITheme = {
    alertComponent: Alert,
    components: {
    //     'CONTENT': React.lazy(() => import('./components/Content')),
    //     'IMAGE': React.lazy(() => import('./components/Image')),
    //     'INPUT': React.lazy(() => import('./components/Input')),
    //     'LIST': React.lazy(() => import('./components/List')),
        'OUTCOMES': React.lazy(() => import('./components/Outcomes')),
        'PRESENTATION': React.lazy(() => import('./components/Presentation')),
    //     'RADIO': React.lazy(() => import('./components/Radio')),
    //     'SELECT': React.lazy(() => import('./components/SelectComponent')),
    //     'TABLE': React.lazy(() => import('./components/Table')),
    //     'TEXTAREA': React.lazy(() => import('./components/Textarea')),
    //     'TOGGLE': React.lazy(() => import('./components/Toggle')),
    },
    containers: {
    //     'GROUP': GroupContainer,
    //     'HORIZONTAL_FLOW': HorizontalContainer,
    //     'INLINE_FLOW': InlineContainer,
        'VERTICAL_FLOW': VerticalContainer
    },
    loaderComponent: Loader,
    navigationComponent: Navigation,
    notificationsComponent: Notifications,
    outcomesComponent: OutcomesList,
    rootContainer: RootContainer
}

export default Bootstrap4;
