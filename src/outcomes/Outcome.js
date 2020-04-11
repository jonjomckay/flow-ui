import React from 'react';
import { Button } from 'antd';

export default class Outcome extends React.Component {
    render() {
        const { isLoading, onClick, outcome } = this.props;

        return (
            <Button disabled={ isLoading } onClick={ onClick } type="primary">
                { outcome.label }
            </Button>
        );
    }
}
