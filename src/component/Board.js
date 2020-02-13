import React, { Component } from 'react';
import Timer from './Timer';
import UserInput from './UserInput';
import BoardRow from './BoardRow';
import axios from 'axios';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: [],
            userInput: ''
        }
    }

    handleClick(value) {
        if (this.validate(value)) {
            fetch("http://localhost:3000/api/v1/letters", { method: 'post', body: { word: value } })
                .then(res => res.json())
                .then((result) => {
                    console.log(result);
                });
            this.setState({ userInput: value });
        }
    }
    render() {
        const { isLoaded, items } = this.state;
        if (isLoaded) {
            const data = [];
            data.push(items.slice(0, 4));
            data.push(items.slice(4, 8));
            data.push(items.slice(8, 12));
            data.push(items.slice(12, 16));
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
                        <UserInput data={this.state.userInput} onClick={(value) => this.handleClick(value)} />
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
        axios.get('http://localhost:3000/api/v1/letters')
            .then((response) => {
                const data = response.data;
                this.setState({
                    isLoaded: true,
                    items: data.letters
                });
            });
    }


    validate(letters) {
        let isValid = false;
        if (letters.length > 2) {
            isValid = this.testValidity(undefined, letters, []);
        }
        return isValid;
    }

    testValidity(testValue, letters, visitedNodes) {
        if (letters.length > 0) {
            let valid = false;
            const letter = letters.charAt(0);
            const nextValue = this.state.items.filter(t => t.label === letter);
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

export default Board;
