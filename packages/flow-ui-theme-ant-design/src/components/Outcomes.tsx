import React from 'react';
import { OutcomesProps } from '@jonjomckay/flow-ui';
import { Button, Row, Space } from 'antd';
import PageOutcomes from '../outcomes/PageOutcomes';

export default function Outcomes(props: OutcomesProps) {
    let justify: 'end' | 'start';
    switch (props.justify) {
        case 'right':
            justify = 'end';
            break;
        default:
            justify = 'start';
            break;
    }

    const outcomes = <PageOutcomes isLoading={ props.isLoading }
                                   outcomes={ props.outcomes }
                                   selectOutcome={ props.selectOutcome } />

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
