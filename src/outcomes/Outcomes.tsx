import React from 'react';
import { connect } from 'react-redux';
import { OutcomesList } from '../antd/components/Outcomes';
import { selectOutcome, SelectOutcomeProps } from '../actions';
import { IOutcome } from '../types';
import { RootState } from '../store';

interface Props {
    isLoading: boolean
    outcomes: IOutcome[]

    selectOutcome(value: SelectOutcomeProps): void
}

function Outcomes(props: Props) {
    // Create outcomes from all the outcome responses that aren't bound to a page object
    return (
        <OutcomesList
            isLoading={ props.isLoading }
            outcomes={ props.outcomes.filter(outcome => outcome.pageObjectBindingId === null) }
            selectOutcome={ props.selectOutcome }
        />
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
