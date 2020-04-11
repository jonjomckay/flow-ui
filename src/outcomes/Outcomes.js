import React from 'react';
import { connect } from 'react-redux';
import Outcome from './Outcome';
import { selectOutcome } from '../actions';

class Outcomes extends React.Component {
    render() {
        const outcomes = this.props.outcomes.map(outcome => {
            return <Outcome outcome={ outcome } key={ outcome.id } isLoading={ this.props.isLoading } onClick={ () => this.props.selectOutcome({ selectedOutcomeId: outcome.id }) } />
        });

        return (
            <div>
                { outcomes }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.state.isLoading,
    outcomes: state.outcomes.outcomes
});

const mapDispatchToProps = ({
    selectOutcome
});

export default connect(mapStateToProps, mapDispatchToProps)(Outcomes);
