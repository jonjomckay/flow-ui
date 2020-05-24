import { IOutcome } from '../types';
import { selectOutcome } from '../actions';

export default interface OutcomesListProps {
    isLoading: boolean;
    outcomes: IOutcome[];

    selectOutcome: typeof selectOutcome;
}
