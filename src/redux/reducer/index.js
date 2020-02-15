import { combineReducers } from 'redux';
import words from './words';
import userInput from './userInput';
import letters from './letters';
import game from './game'

export default combineReducers({words, userInput, letters, game});
