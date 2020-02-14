import { combineReducers } from 'redux';
import words from './words';
import userInput from './userInput';
import letters from './letters';

export default combineReducers({words, userInput, letters});
