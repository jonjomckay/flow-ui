import React from 'react';
import { connect } from 'react-redux';
import Outcome from './Outcome';
import { selectOutcome, SelectOutcomeProps } from '../actions';
import { IOutcome } from '../types';
import { RootState } from '../store';

interface Props {
    isLoading: boolean
    outcomes: IOutcome[]

    selectOutcome(value: SelectOutcomeProps): void
}

function Outcomes(props: Props) {
    const outcomes = props.outcomes.map(outcome => {
        return <Outcome outcome={ outcome } key={ outcome.id } isLoading={ props.isLoading }
                        onClick={ () => props.selectOutcome({ selectedOutcomeId: outcome.id }) } />
    });

    return (
        <div style={ { marginTop: '16px' } }>
            { outcomes }
        </div>
    );
}

const mapStateToProps = (state: RootState) => ({
    isLoading: state.state.isLoading,
    outcomes: state.outcomes.outcomes
});

const mapDispatchToProps = ({
    selectOutcome
});

export default connect(mapStateToProps, mapDispatchToProps)(Outcomes);
