import * as React from 'react';
import { connect } from 'react-redux';
import { selectOutcome } from '../actions';
import { RootState } from '../store';
import ITheme from '../theme/ITheme';
import { OutcomesProps } from '../index';

type Props = OutcomesProps & {
    theme: ITheme;
}

function Outcomes(props: Props): React.ReactElement<OutcomesProps> {
    // Create outcomes from all the outcome responses that aren't bound to a page object
    return React.createElement(props.theme.components.OUTCOMES, {
        ...props,
        outcomes: props.outcomes.filter(outcome => outcome.pageObjectBindingId === null),
        selectOutcome: props.selectOutcome
    });
}

const mapStateToProps = (state: RootState) => ({
    isLoading: state.state.isLoading,
    outcomes: state.outcomes.outcomes
});

const mapDispatchToProps = ({
    selectOutcome
});

export default connect(mapStateToProps, mapDispatchToProps)(Outcomes);
