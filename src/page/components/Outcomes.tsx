import * as React from 'react';
import PageComponentProps from '../PageComponentProps';
import Outcome from '../../outcomes/Outcome';
import { IOutcome } from '../../types';
import { selectOutcome } from '../../actions';
import { Button, Row, Space } from 'antd';
import './Outcomes.less';

interface OutcomesListProps {
    isLoading: boolean
    outcomes: IOutcome[]

    selectOutcome: typeof selectOutcome
}

export function OutcomesList(props: OutcomesListProps) {
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
        <>
            { outcomes }
        </>
    );
}

export default function Outcomes(props: PageComponentProps) {
    let justify: any;
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
                <Row className="outcomes" justify={ justify }>
                    <Button.Group style={ { marginTop: '16px' } }>
                        <OutcomesList { ...props } />
                    </Button.Group>
                </Row>
            );
        case 'vertical':
            return (
                <Row className="outcomes" justify={ justify }>
                    <Space direction="vertical" size={0}>
                        { OutcomesList(props) }
                    </Space>
                </Row>
            )
        default:
            return (
                <Row className="outcomes" justify={ justify }>
                    <OutcomesList { ...props } />
                </Row>
            )
    }
}
