import React, { Component } from 'react';
import Timer from './Timer';
import UserInput from './UserInput';
import BoardRow from './BoardRow';
import axios from 'axios';
import Points from './Points';
import Finish from './Finish';
import { getUserInput, getGeneratedLetters } from '../redux/selector/selectors';
import { connect } from 'react-redux';
import { addWord, setGeneratedLetters } from '../redux/action/action';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMsg: ''
        }
    }

    render() {
        const { generatedLetters } = this.props;
        const letters = generatedLetters.letters;
        if (letters.length > 0) {
            const data = [];
            data.push(letters.slice(0, 4));
            data.push(letters.slice(4, 8));
            data.push(letters.slice(8, 12));
            data.push(letters.slice(12, 16));
            const rowData = data.map((columnData, index) => <BoardRow key={index} columns={columnData} />);
            return (
                <div>
                    <div>
                        <Timer />
                    </div>
                    <div>
                        {rowData}
                    </div>
                    <div>
                        <UserInput />
                    </div>
                    <div>{this.state.errorMsg}</div>
                    <div>
                        <Points />
                    </div>
                    <div>
                        <Finish />
                    </div>
                </div >
            );
        } else {
            return (
                <div>Loading</div>
            );
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/v1/generate')
            .then((response) => {
                const data = response.data.letters;
                this.props.setGeneratedLetters(data);
            });
    }

    componentDidUpdate() {
        const { userInput } = this.props;
        const input = userInput.input;
        if (this.validate(input)) {
            const params = {
                word: input
            };
            axios.get('http://localhost:3000/api/v1/validate', { params })
                .then(response => {
                    if (response.data.valid) {
                        this.props.addWord(input);
                    }
                });
        }
    }

    validate(letters) {
        let isValid = false;
        if (letters.length > 2) {
            isValid = this.testValidity(undefined, letters, []);
        }
        return isValid;
    }

    testValidity(testValue, letters, visitedNodes) {
        const { generatedLetters } = this.props
        if (letters.length > 0) {
            let valid = false;
            const letter = letters.charAt(0);
            const nextValue = generatedLetters.letters.filter(t => t.label === letter);
            for (let k = 0; k < nextValue.length; k++) {
                if (testValue) {
                    if (!visitedNodes.some(vn => vn.row === nextValue[k].rPos && vn.col === nextValue[k].cPos) && this.testRange(testValue.rPos, nextValue[k].rPos)) {
                        if (this.testRange(testValue.cPos, nextValue[k].cPos)) {
                            valid = this.testValidity(nextValue[k], letters.slice(1), [...visitedNodes, { row: nextValue[k].rPos, col: nextValue[k].cPos }]);
                        }
                    }
                } else {
                    valid = this.testValidity(nextValue[k], letters.slice(1), [...visitedNodes, { row: nextValue[k].rPos, col: nextValue[k].cPos }]);
                }
                if (valid) {
                    break;
                }
            }
            return valid;
        } else {
            return true;
        }
    }

    testRange(stableIndex, testIndex) {
        let inRange = false;
        if (testIndex === stableIndex) {
            inRange = true;
        } else if (testIndex > stableIndex) {
            inRange = stableIndex + 1 === testIndex;
        } else if (testIndex < stableIndex) {
            inRange = stableIndex - 1 === testIndex;
        }
        return inRange;
    }
}

const mapStateToProps = (state) => {
    const userInput = getUserInput(state);
    const generatedLetters = getGeneratedLetters(state);
    return { userInput, generatedLetters };
}

export default connect(mapStateToProps, { addWord, setGeneratedLetters })(Board);
