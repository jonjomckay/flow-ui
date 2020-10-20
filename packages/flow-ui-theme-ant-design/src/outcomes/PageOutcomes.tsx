import * as React from 'react';
import './PageOutcomes.less';
import { PageOutcomesProps } from '@jonjomckay/flow-ui';
import PageOutcome from './PageOutcome';

export default function PageOutcomes(props: PageOutcomesProps): React.ReactElement<PageOutcomesProps> {
    const outcomes = props.outcomes.map(outcome => {
        return (
            <PageOutcome outcome={ outcome }
                         key={ outcome.id }
                         isLoading={ props.isLoading }
                         onClick={ () => props.selectOutcome({ selectedOutcomeId: outcome.id }) }
            />
        )
    });

    return (
        <>
            { outcomes }
        </>
    );
}
