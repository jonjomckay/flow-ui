import * as React from 'react';
import { OutcomesProps } from '@jonjomckay/flow-ui';
import Outcome from './Outcome';
import { Row } from 'antd';

export default function OutcomesList(props: OutcomesProps): React.ReactElement<OutcomesProps> {
    const outcomes = props.outcomes.map(outcome => {
        return (
            <Outcome outcome={ outcome }
                     key={ outcome.id }
                     isLoading={ props.isLoading }
                     onClick={ () => props.selectOutcome({ selectedOutcomeId: outcome.id }) }
            />
        )
    });

    return (
        <Row className="outcomes">
            { outcomes }
        </Row>
    );
}
