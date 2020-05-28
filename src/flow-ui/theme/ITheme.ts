import { ComponentClass, FunctionComponent } from 'react';
import {
    AlertProps,
    LoaderProps,
    NavigationProps,
    NotificationsProps,
    OutcomesListProps,
    PageComponentProps,
    PageContainerProps
} from '../index';

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
