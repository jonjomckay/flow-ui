import { ComponentClass, FunctionComponent } from 'react';
import { NavigationProps } from './navigation/Navigation';
import PageContainerProps from './page/PageContainerProps';
import PageComponentProps from './page/PageComponentProps';

type Component<P> = FunctionComponent<P> | ComponentClass<P> | string;

export default interface ITheme {
    components: { [type: string]: Component<PageComponentProps> }
    containers: { [type: string]: Component<PageContainerProps> }
    navigation: Component<NavigationProps>
    rootContainer: Component<any>
}
