import React from 'react';
import classnames from 'classnames';
import './ProgressBar.less';

interface Props {
    percent: number;
}

interface State {
    percent: number;
}

// This is heavily based on https://github.com/minhtranite/react-progress-bar-plus
class ProgressBar extends React.Component<Props, State> {
    static defaultProps: Props = {
        percent: -1,
    };

    interval?: number;
    timeout?: number;

    state: State = {
        percent: this.props.percent
    };

    componentDidUpdate(prevProps: Readonly<Props>): void {
        const { percent } = this.props;

        if (this.props.percent !== prevProps.percent) {
            if (this.interval) {
                clearInterval(this.interval);
            }
            if (this.timeout) {
                clearTimeout(this.timeout);
            }

            // If we have a valid positive percentage, we want to increment it every $intervalTime
            if (percent >= 0 && percent < 99) {
                this.interval = window.setInterval(this.increment, 200);
            }

            // If we're at 100%, wait 400ms before resetting the percent back to -1
            if (this.props.percent >= 100) {
                this.setState({
                    percent: 99.9
                }, () => {
                    this.timeout = window.setTimeout(() => {
                        this.setState({
                            percent: -1
                        });
                    }, 400);
                });
            } else {
                this.setState({
                    percent: this.props.percent
                });
            }
        }
    }

    componentWillUnmount = (): void => {
        if (this.interval) {
            clearInterval(this.interval);
        }
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    };

    increment = (): void => {
        const nextPercent = this.state.percent + ((Math.random() + 1) - Math.random());

        this.setState({
            percent: nextPercent < 99 ? nextPercent : 99
        });
    };

    render(): React.ReactNode {
        const { percent } = this.state;

        const className = classnames('progress-bar', {
            'progress-bar-hide': percent < 0 || percent >= 100
        });

        const style = { width: `${ percent < 0 ? 0 : percent }%` };

        return (
            <div className={ className }>
                <div className="progress-bar-percent" style={ style } />
            </div>
        );
    }
}

export default ProgressBar;
