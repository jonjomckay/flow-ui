import { ComponentClass, FunctionComponent } from 'react';
import {
    AlertProps, CheckboxProps,
    ContentProps,
    ImageProps, InputProps,
    ListProps,
    LoaderProps,
    NavigationProps,
    NotificationsProps,
    OutcomesProps,
    PageContainerProps,
    PresentationProps, RadioProps, TextareaProps
} from '../index';

type Component<P> = FunctionComponent<P> | ComponentClass<P> | string;

type Components = {
    'CHECKBOX': Component<CheckboxProps>
    'CONTENT': Component<ContentProps>
    'IMAGE': Component<ImageProps>
    'INPUT': Component<InputProps>
    'LIST': Component<ListProps>
    'OUTCOMES': Component<OutcomesProps>
    'PRESENTATION': Component<PresentationProps>
    'RADIO': Component<RadioProps>
    'TEXTAREA': Component<TextareaProps>
};

export default interface ITheme {
    alertComponent: Component<AlertProps>,
    components: Components
    containers: { [type: string]: Component<PageContainerProps> }
    loaderComponent: Component<LoaderProps>,
    navigationComponent: Component<NavigationProps>
    notificationsComponent: Component<NotificationsProps>
    rootContainer: Component<any>
}
