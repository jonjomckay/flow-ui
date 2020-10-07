import { IOutcome, selectOutcome } from '@jonjomckay/flow-ui';

export interface PageOutcomesProps {
    isLoading: boolean;
    outcomes: IOutcome[];
    selectOutcome: typeof selectOutcome;
}
