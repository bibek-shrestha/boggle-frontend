import {combineReducers} from 'redux';
import words from './words/words';
import letters from './letters/letters';
import game from './game/game'

export default combineReducers({words, letters, game});
