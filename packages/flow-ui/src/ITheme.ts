import { ComponentClass, FunctionComponent } from 'react';
import NavigationProps from './navigation/NavigationProps';
import PageContainerProps from './page/PageContainerProps';
import PageComponentProps from './page/PageComponentProps';
import AlertProps from './common/AlertProps';
import NotificationsProps from './notification/NotificationsProps';
import OutcomesListProps from './outcomes/OutcomesListProps';
import LoaderProps from './loader/LoaderProps';

type Component<P> = FunctionComponent<P> | ComponentClass<P> | string;

export default interface ITheme {
    alertComponent: Component<AlertProps>,
    components: { [type: string]: Component<PageComponentProps> }
    containers: { [type: string]: Component<PageContainerProps> }
    loaderComponent: Component<LoaderProps>,
    navigationComponent: Component<NavigationProps>
    notificationsComponent: Component<NotificationsProps>
    outcomesComponent: Component<OutcomesListProps>
    rootContainer: Component<any>
}
