import React, { Component } from "react";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.toOffsetDate(this.props.offset)
        };
    }
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    toOffsetDate(offset) {
        var d = new Date(new Date().getTime() + (3600 * 1000));
        var hrs = d.getUTCHours();
        var mins = d.getUTCMinutes();
        return `${hrs}:${mins}`;

    }

    tick() {
        this.setState({
            time: this.toOffsetDate(this.props.offset)
        });
    }
    render() {
        return (
            <p className="App-clock">
                The time is {this.state.time}.
            </p>
        );
    }
}

export default Clock;