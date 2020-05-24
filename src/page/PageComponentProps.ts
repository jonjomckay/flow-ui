import { IObjectData, IOutcome, IPageComponent } from '../types';
import { IPageComponentOnChangeProps } from './PageComponent';
import { SelectOutcomeProps } from '../actions';

export default interface PageComponentProps {
    component: IPageComponent
    isLoading: boolean
    objectData?: IObjectData[]
    outcomes: IOutcome[]

    onChange(value: IPageComponentOnChangeProps): void
    selectOutcome(value: SelectOutcomeProps): void
}
