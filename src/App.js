import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { initializeFlow } from './actions';
import Page from './page/Page';

class App extends React.Component {
    componentDidMount() {
        this.props.initializeFlow({
            flowId: {
                id: 'c6b211f0-b342-4f67-b7b1-b8b62868b2a4'
            }
        });
    }

    render() {
        return (
            <Page />
        );
    }
}

const mapDispatchToProps = ({
    initializeFlow
});

export default connect(null, mapDispatchToProps)(App);
