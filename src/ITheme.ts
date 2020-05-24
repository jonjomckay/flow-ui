import { ComponentClass, FunctionComponent } from 'react';
import NavigationProps from './navigation/NavigationProps';
import PageContainerProps from './page/PageContainerProps';
import PageComponentProps from './page/PageComponentProps';
import AlertProps from './common/AlertProps';
import NotificationsProps from './notification/NotificationsProps';

type Component<P> = FunctionComponent<P> | ComponentClass<P> | string;

export default interface ITheme {
    alertComponent: Component<AlertProps>,
    components: { [type: string]: Component<PageComponentProps> }
    containers: { [type: string]: Component<PageContainerProps> }
    loaderComponent: Component<any>,
    navigation: Component<NavigationProps>
    notificationsComponent: Component<NotificationsProps>
    rootContainer: Component<any>
}
