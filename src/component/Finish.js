import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getWordsState } from '../redux/selector/selectors';

class Finish extends Component {
    render() {
        return (
            <div>
                <div>Your score is: <bold>{this.props.count}</bold></div>
                <button>OK</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const words = getWordsState(state);
    const usedWords = words.words;
    let count = 0;
    usedWords.forEach(word => count = count + word.length);
    return {count};
}
 
export default connect(mapStateToProps)(Finish);
