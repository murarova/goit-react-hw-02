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
        prevButtonIsActive: true,
        nextButtonIsActive: false,
    };

    // toggledButtonDisabled = () => {
    //     console.log('this.state.index', this.state.index);
    //     console.log('this.state.items.length', this.state.items.length);
    //     console.log(
    //         'this.state.prevButtonIsActive',
    //         this.state.prevButtonIsActive,
    //     );
    //     console.log(
    //         'this.state.nextButtonIsActive',
    //         this.state.nextButtonIsActive,
    //     );
    //     if (this.state.index === this.state.items.length - 2) {
    //         this.setState({ nextButtonIsActive: true });
    //     } else {
    //         this.setState({ nextButtonIsActive: false });
    //     }
    //     if (this.state.index < 0) {
    //         this.setState({ prevButtonIsActive: true });
    //     } else {
    //         this.setState({ prevButtonIsActive: false });
    //     }
    // };

    nextIndex = () =>
        this.setState(
            state =>
                state.index === state.items.length - 1 || {
                    index: state.index + 1,
                },
            this.toggledButtonDisabled(),
        );

    prevIndex = () =>
        this.setState(
            state => state.index === 0 || { index: state.index - 1 },
            this.toggledButtonDisabled(),
        );

    render() {
        const { items } = this.props;
        const { index, nextButtonIsActive, prevButtonIsActive } = this.state;

        return (
            <Fragment>
                <Publication items={items} index={index} />
                <Counter items={items} index={index} />
                <Controls
                    nextIndex={this.nextIndex}
                    prevIndex={this.prevIndex}
                    nextButtonIsActive={nextButtonIsActive}
                    prevButtonIsActive={prevButtonIsActive}
                />
            </Fragment>
        );
    }
}
