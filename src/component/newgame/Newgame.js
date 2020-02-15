import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {setGameStatus, setGeneratedLetters, removeWords} from '../../redux/action/action';
import axios from "axios";

class NewGame extends Component {
    render() {
        return (
          <Fragment>
              <div className="user-btn-wrapper"><button className="btn" onClick={this.startNewGame}>New Game</button></div>
          </Fragment>
        );
    }

    startNewGame = () => {
        axios.get('http://localhost:3000/api/v1/generate')
            .then((response) => {
                const data = response.data.data;
                this.props.removeWords();
                this.props.setGeneratedLetters(data);
                this.props.setGameStatus(1);
            });
    }
}
export default connect(null, {setGeneratedLetters, setGameStatus, removeWords })(NewGame);
