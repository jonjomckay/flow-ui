import * as React from 'react';
import { Button, Row, Space } from 'antd';
import './Outcomes.less';
import { OutcomesProps } from '@jonjomckay/flow-ui';
import OutcomesList from './OutcomesList';

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

    switch (props.group) {
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
