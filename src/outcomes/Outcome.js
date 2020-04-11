import React from 'react';
import { Button } from 'antd';

export default class Outcome extends React.Component {
    render() {
        const { onClick, outcome } = this.props;

        return (
            <Button onClick={ onClick } type="primary">
                { outcome.label }
            </Button>
        );
    }
}
