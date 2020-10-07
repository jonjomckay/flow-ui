import * as React from 'react';
import { connect } from 'react-redux';
import { selectOutcome } from '../actions';
import { RootState } from '../store';
import ITheme from '../theme/ITheme';
import { PageOutcomesProps } from '../index';

type Props = PageOutcomesProps & {
    theme: ITheme;
}

function PageOutcomes(props: Props): React.ReactElement<PageOutcomesProps> {
    // Create outcomes from all the outcome responses that aren't bound to a page object
    return React.createElement(props.theme.outcomesComponent, {
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

export default connect(mapStateToProps, mapDispatchToProps)(PageOutcomes);
