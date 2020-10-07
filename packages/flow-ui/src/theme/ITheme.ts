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
    PresentationProps, RadioProps, TableProps, TextareaProps, ToggleProps
} from '../index';
import { ComponentType } from '../page/PageConstants';

type Component<P> = FunctionComponent<P> | ComponentClass<P> | string;

type Components = {
    [ComponentType.Checkbox]: Component<CheckboxProps>
    [ComponentType.Content]: Component<ContentProps>
    [ComponentType.Image]: Component<ImageProps>
    [ComponentType.Input]: Component<InputProps>
    [ComponentType.List]: Component<ListProps>
    [ComponentType.Outcomes]: Component<OutcomesProps>
    [ComponentType.Presentation]: Component<PresentationProps>
    [ComponentType.Radio]: Component<RadioProps>
    [ComponentType.Table]: Component<TableProps>
    [ComponentType.Textarea]: Component<TextareaProps>
    [ComponentType.Toggle]: Component<ToggleProps>
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
