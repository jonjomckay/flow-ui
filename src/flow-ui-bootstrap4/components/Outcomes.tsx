import * as React from 'react';
import Outcome from './Outcome';
import { Col, Row, ButtonGroup } from 'react-bootstrap';
import { OutcomesListProps, PageComponentProps } from '../../flow-ui';

export function OutcomesList(props: OutcomesListProps): React.ReactElement<PageComponentProps> {
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

export default function Outcomes(props: PageComponentProps): React.ReactElement<PageComponentProps> {
    let justify: string;
    switch (props.component.attributes && props.component.attributes['justify']) {
        case 'right':
            justify = 'col-auto ml-auto';
            break;
        default:
            justify = 'col-auto';
            break;
    }

    switch (props.component.attributes && props.component.attributes['group']) {
        case 'horizontal':
            return (
                <Row>
                    <Col className={ justify }>
                        <ButtonGroup>
                            <OutcomesList { ...props } />
                        </ButtonGroup>
                    </Col>
                </Row>
            );
        case 'vertical':
            return (
                <Row>
                    <Col className={ justify }>
                        <ButtonGroup vertical>
                            <OutcomesList { ...props } />
                        </ButtonGroup>
                    </Col>
                </Row>
            )
        default:
            return (
                <Row>
                    <Col className={ justify }>
                        <OutcomesList { ...props } />
                    </Col>
                </Row>
            )
    }
}
