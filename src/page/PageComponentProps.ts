import { IObjectData, IPageComponent } from '../types';
import { IPageComponentOnChangeProps } from './PageComponent';

export default interface PageComponentProps {
    component: IPageComponent
    isLoading: boolean
    objectData?: IObjectData[]

    onChange(value: IPageComponentOnChangeProps): void
}
