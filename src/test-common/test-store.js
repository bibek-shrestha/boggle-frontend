import {createStore} from 'redux';
import rootReducer from '../redux/reducer';
import {mockGeneration, validWord} from './constants';

export const initialState = {
    words: {
        words: [validWord]
    },
    letters: {
        letters: mockGeneration.letters
    },
    game: {
        status: 0
    }
};

export default createStore(rootReducer, initialState);