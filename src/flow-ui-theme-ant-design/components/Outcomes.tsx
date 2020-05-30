import * as React from 'react';
import { Button, Row, Space } from 'antd';
import './Outcomes.less';
import { PageComponentProps } from '../../flow-ui';
import OutcomesList from './OutcomesList';

export default function Outcomes(props: PageComponentProps): React.ReactElement<PageComponentProps> {
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
