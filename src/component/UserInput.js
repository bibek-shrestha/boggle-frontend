import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserInput} from '../redux/action/action';

class UserInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
    }

    updateInput = input => {
        this.setState({input});
    }

    handleSetUserInput = () => {
        this.props.setUserInput(this.state.input);
        this.setState({input: ''});
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.input} onChange={(e) => this.updateInput(e.target.value)} />
                <button onClick={this.handleSetUserInput}>Check</button>
            </div>
        );
    }
}

export default connect(
    null,
    { setUserInput }
) (UserInput);
