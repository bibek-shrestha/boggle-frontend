import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getWordsState} from '../../redux/selector/selectors';

class Points extends Component {
    render() {
        const {words} = this.props;
        const usedWords = words.words;
        return (
            <table data-testid="points-table" className="points-table">
                <thead>
                <tr>
                    <th>Word</th>
                    <th>Points</th>
                </tr>
                </thead>
                <tbody>
                {this.populateTable(usedWords)}
                <tr>
                    <th>Total</th>
                    <th>{this.getTotalPoints(usedWords)}</th>
                </tr>
                </tbody>
            </table>
        );
    }

    getTotalPoints (usedWords) {
        return usedWords.reduce((accumulator, current) => accumulator + current.points, 0);
    };

    populateTable (usedWords) {
        return usedWords.map((w, index) => <tr key={index}>
            <td>{w.word}</td>
            <td>{w.points}</td>
        </tr>);
    }
}

const mapStateToProps = state => {
    const words = getWordsState(state);
    return {words};
};

export default connect(mapStateToProps)(Points);
