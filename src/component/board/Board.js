import React, {Component, Fragment} from 'react';
import Timer from '../timer/Timer';
import UserInput from '../userinput/UserInput';
import Points from '../points/Points';
import {getGameStatus, getGeneratedLetters, getUserInput} from '../../redux/selector/selectors';
import {connect} from 'react-redux';
import {setGameStatus, setGeneratedLetters} from '../../redux/action/action';
import NewGame from '../newgame/Newgame';

class Board extends Component {
    render() {
        return (
            <div>
                <div className='app-layout'>
                    <div className='box game'>
                        {this.getGame()}
                    </div>
                    <div className='box word-list'><Points/></div>
                </div>

            </div>
        );
    }

    organizeData = () => {
        const {generatedLetters, dimension} = this.props;
        const letters = generatedLetters.letters;
        const data = [];
        for (let i = 0; i < dimension; i++) {
            data.push(letters.filter(l => l.rPos === i));
        }
        return data;
    };

    populateTable = (data) => {
        return data.map((rowData, index) => <tr key={index}>{this.populateRow(rowData)}</tr>);
    };

    populateRow = (rowData) => {
        return rowData.map((columnData, index) => <td key={index} className="equalRelative">
            <div className="character-wrapper">{columnData.label}</div>
        </td>);
    };

    getGame = () => {
        const {game} = this.props;
        if (game.status === 0) {
            return <NewGame/>;
        } else {
            const data = this.organizeData();
            return (
                <Fragment>
                    <div className='game-nodes'>
                        <Timer/>
                    </div>
                    <div className='game-nodes'>
                        <table className="board-table">
                            <tbody>
                            {this.populateTable(data)}
                            </tbody>
                        </table>
                    </div>
                    <div className='game-nodes'>
                        <UserInput/>
                    </div>
                </Fragment>
            );
        }
    };
}

const mapStateToProps = (state) => {
    const userInput = getUserInput(state);
    const generatedLetters = getGeneratedLetters(state);
    const game = getGameStatus(state);
    return {userInput, generatedLetters, game};
};

export default connect(mapStateToProps, {setGeneratedLetters, setGameStatus})(Board);
