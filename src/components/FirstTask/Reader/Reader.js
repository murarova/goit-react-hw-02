import React, { Fragment, Component } from 'react';
import propTypes from 'prop-types';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';

export default class Reader extends Component {
    static defaultProps = {
        items: [],
    };

    static propTypes = {
        items: propTypes.arrayOf(propTypes.object),
    };

    state = {
        index: 0,
        items: this.props.items,
    };

    nextIndex = () =>
        this.setState(state => {
            return (
                state.index === state.items.length - 1 || {
                    index: state.index + 1,
                }
            );
        });

    prevIndex = () =>
        this.setState(state => {
            return state.index === 0 || { index: state.index - 1 };
        });

    render() {
        const { items } = this.props;
        const { index } = this.state;

        return (
            <Fragment>
                <Publication items={items} index={index} />
                <Counter items={items} index={index} />
                <Controls
                    nextIndex={this.nextIndex}
                    prevIndex={this.prevIndex}
                />
            </Fragment>
        );
    }
}
