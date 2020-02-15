import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {testValidity} from '../../util/Utils';
import {getGeneratedLetters, getWordsState} from '../../redux/selector/selectors';
import {addWord} from '../../redux/action/action';

class UserInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            error: false
        };
    }

    updateInput = input => {
        this.setState({input});
    };

    handleSubmit = () => {
        const input = this.state.input.toUpperCase();
        this.setState({input: ''});
        this.validateWord(input);
    };

    render() {
        return (
            <Fragment>
                    <div>
                        <input className="user-input" autoFocus placeholder="Enter your word" type="text"
                               value={this.state.input}
                               onChange={(e) => this.updateInput(e.target.value)}/>
                        {this.state.error ? <div className="user-input error" >Invalid Input.</div> : <span></span>}
                    </div>
                    <div className="user-btn-wrapper">
                        <button className="btn" type="submit" disabled={!this.state.input} onClick={this.handleSubmit}>Check</button>

                    </div>
            </Fragment>
        );
    }

    validateWord = (input) => {
        if (this.validate(input)) {
            const params = {
                word: input
            };
            axios.get('http://localhost:3000/api/v1/validate', {params})
                .then(response => {
                    if (response.data.data.isValid) {
                        const word = {
                            word: input,
                            points: input.length
                        };
                        this.props.addWord(word);
                    } else {
                        this.warnError();
                    }
                });
        } else {
            this.warnError();
        }
    };

    warnError = () => {
        this.setState({error: true});
        setTimeout(() => this.setState({error: false}), 2000)
    }


    validate = (letters) => {
        const {generatedLetters, words} = this.props;
        let isValid = false;
        if (letters.length > 2 && letters.length <= 16) {
            isValid = testValidity(undefined, letters, [], generatedLetters);
        }
        if (isValid) {
            isValid = !words.words.some(w => w.word === letters);
        }
        return isValid;
    }
}

const mapStateToProps = (state) => {
    const generatedLetters = getGeneratedLetters(state);
    const words = getWordsState(state);
    return {generatedLetters, words};
};

export default connect(
    mapStateToProps,
    {addWord}
)(UserInput);
