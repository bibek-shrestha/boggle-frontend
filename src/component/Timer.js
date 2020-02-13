import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minute: 2,
            second: 0
        };
    }

    componentDidMount() {
        this.clockInterval = setInterval(() => {
            const {minute, second} = this.state;
            if (second > 0) {
                this.setState(({second}) => ({
                    second: second - 1
                }));
            }
            if (second === 0) {
                if (minute === 0) {
                    clearInterval(this.clockInterval);
                } else {
                    this.setState(({minute}) => ({
                        minute: minute - 1,
                        second: 59
                    }));
                }
            }
        }, 1000);
    }

    render() {
        const {minute, second} = this.state;
        return (
            <div>
                <h2>0{minute} : { second < 10 ? `0${ second }` : second }</h2>
            </div>
        );
    }
}

export default Timer;
