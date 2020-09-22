import { ITheme } from '@jonjomckay/flow-ui';

import Checkbox from './components/Checkbox';
import Content from './components/Content';
import Image from './components/Image';
import Input from './components/Input';
import List from './components/List';
import Outcomes from './components/Outcomes';
import Presentation from './components/Presentation';
import Radio from './components/Radio';
import SelectComponent from './components/SelectComponent';
import Table from './components/Table';
import Textarea from './components/Textarea';
import Toggle from './components/Toggle';

import GroupContainer from './containers/GroupContainer';
import HorizontalContainer from './containers/HorizontalContainer';
import InlineContainer from './containers/InlineContainer';
import VerticalContainer from './containers/VerticalContainer';

import Alert from './alert/Alert';
import Loader from './loader/Loader';
import Navigation from './navigation/Navigation';
import Notifications from './notification/Notifications';
import RootContainer from './containers/RootContainer';

const AntDesign: ITheme = {
    alertComponent: Alert,
    components: {
        'CHECKBOX': Checkbox,
        'CONTENT': Content,
        'IMAGE': Image,
        'INPUT': Input,
        'LIST': List,
        'OUTCOMES': Outcomes,
        'PRESENTATION': Presentation,
        'RADIO': Radio,
        // 'SELECT': SelectComponent,
        // 'TABLE': Table,
        'TEXTAREA': Textarea,
        // 'TOGGLE': Toggle,
    },
    containers: {
        'GROUP': GroupContainer,
        'HORIZONTAL_FLOW': HorizontalContainer,
        'INLINE_FLOW': InlineContainer,
        'VERTICAL_FLOW': VerticalContainer,
    },
    loaderComponent: Loader,
    navigationComponent: Navigation,
    notificationsComponent: Notifications,
    rootContainer: RootContainer
}

export default AntDesign;
