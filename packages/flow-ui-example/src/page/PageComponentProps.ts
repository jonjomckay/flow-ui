import { IObjectData, IOutcome, IPageComponent } from '../types';
import { PageComponentOnChangeProps } from './PageComponent';
import { SelectOutcomeProps } from '../actions';

export default interface PageComponentProps {
    component: IPageComponent
    isLoading: boolean
    objectData?: IObjectData[]
    outcomes: IOutcome[]

    onChange(value: PageComponentOnChangeProps): void
    selectOutcome(value: SelectOutcomeProps): void
}
