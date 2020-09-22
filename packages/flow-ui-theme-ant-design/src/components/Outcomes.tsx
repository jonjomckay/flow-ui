import * as React from 'react';
import { Button, Row, Space } from 'antd';
import './Outcomes.less';
import { OutcomesProps } from '@jonjomckay/flow-ui';
import Outcome from './Outcome';

export default function Outcomes(props: OutcomesProps): React.ReactElement<OutcomesProps> {
    let justify: 'end' | 'start';
    switch (props.justify) {
        case 'right':
            justify = 'end';
            break;
        default:
            justify = 'start';
            break;
    }

    const outcomes = props.outcomes.map(outcome => {
        return (
            <Outcome outcome={ outcome }
                     key={ outcome.id }
                     isLoading={ props.isLoading }
                     onClick={ () => props.selectOutcome({ selectedOutcomeId: outcome.id }) }
            />
        )
    });

    switch (props.group) {
        case 'horizontal':
            return (
                <Row justify={ justify }>
                    <Button.Group>
                        <Row className="outcomes">
                            { outcomes }
                        </Row>
                    </Button.Group>
                </Row>
            );
        case 'vertical':
            return (
                <Row justify={ justify }>
                    <Space direction="vertical" size={ 0 }>
                        <Row className="outcomes">
                            { outcomes }
                        </Row>
                    </Space>
                </Row>
            )
        default:
            return (
                <Row justify={ justify }>
                    <Row className="outcomes">
                        { outcomes }
                    </Row>
                </Row>
            )
    }
}
