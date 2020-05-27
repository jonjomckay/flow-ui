import * as React from 'react';
import Outcome from './Outcome';
import { Button, Row, Space } from 'antd';
import './Outcomes.less';
import { OutcomesListProps, PageComponentProps } from '@jonjomckay/flow-ui';

export function OutcomesList(props: OutcomesListProps): React.ReactNode {
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

export default function Outcomes(props: PageComponentProps): React.ReactNode {
    let justify: 'end' | 'start';
    switch (props.component.attributes && props.component.attributes['justify']) {
        case 'right':
            justify = 'end';
            break;
        default:
            justify = 'start';
            break;
    }

    switch (props.component.attributes && props.component.attributes['group']) {
        case 'horizontal':
            return (
                <Row justify={ justify }>
                    <Button.Group>
                        <OutcomesList { ...props } />
                    </Button.Group>
                </Row>
            );
        case 'vertical':
            return (
                <Row justify={ justify }>
                    <Space direction="vertical" size={ 0 }>
                        { OutcomesList(props) }
                    </Space>
                </Row>
            )
        default:
            return (
                <Row justify={ justify }>
                    <OutcomesList { ...props } />
                </Row>
            )
    }
}
