// Code utilized from 2/15 - Functional and Class components.
import React from 'react';

class RepetitionExercise extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0, name: props.name }
    }

    setCount(count) {
        if (count !== 0) {
            this.setState(
                ({ count }) => {
                    count++
                    return { count }
                }
            )
        } else {
            this.setState(
                () => {
                    count = 0
                    return { count }
                }
            )
        }
    }
    render() {
        let { name } = this.props
        let { count } = this.state
        return (
            <div>
                <h1>{name}</h1>
                <p>Count:{count}</p>
                <button onClick={() => this.setCount()}>Complete Rep</button>
                <button onClick={() => this.setCount(0)}>Reset</button>
                <button onClick={() => this.props.setShowCase("")}>Return</button>
            </div>
        );
    }
}

export default RepetitionExercise;