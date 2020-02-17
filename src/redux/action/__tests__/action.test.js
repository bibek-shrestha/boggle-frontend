import {addWord, removeWords, setGameStatus, setGeneratedLetters} from '../action';
import {ADD_WORD, REMOVE_WORDS, SET_GAME_STATUS, SET_GENERATED_LETTERS} from '../actionType';
import {mockGeneration, validWord} from '../../../test-common/constants';

describe('Action Test', () => {
    it('should return correction add word action', () => {
        expect(addWord(validWord)).toEqual({
            type: ADD_WORD,
            payload: {
                validWord
            }
        });
    });

    it('should return correct remove words action', () => {
        expect(removeWords()).toEqual({
            type: REMOVE_WORDS
        });
    });

    it('should return correct set generated letters action', () => {
        expect(setGeneratedLetters(mockGeneration.letters)).toEqual({
            type: SET_GENERATED_LETTERS,
            payload: {
                letters: mockGeneration.letters
            }
        });
    });

    it('should return correct set game status action', () => {
        expect(setGameStatus(1)).toEqual({
            type: SET_GAME_STATUS,
            payload: {
                status: 1
            }
        });
    });

});
