import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getWordsState } from '../redux/selector/selectors';

class Points extends Component {
    render() {
        const {words} = this.props;
        const usedWords = words.words;
        return (
            <div>
                {usedWords.map((word, index) => (
                    <div key={index}>
                        <div>{word}</div>
                        <div>{word.length}</div>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const words = getWordsState(state);
    return { words };
}

export default connect(mapStateToProps) (Points);
