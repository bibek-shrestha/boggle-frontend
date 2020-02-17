import words from '../words';
import {addWord, removeWords} from '../../../action/action';
import {validWord} from '../../../../test-common/constants';
import {initialState} from '../../../../test-common/test-store';
import store from './../../../../test-common/test-store';


describe('Reducer for words', () => {
    it('should set the words in state', function () {
        expect(words(undefined, addWord(validWord))).toEqual({
            words: [validWord]
        });
    });

    it('should reset the words state', () => {
        expect(words(store.getState(), removeWords())).toEqual({
            words: []
        });
    });

    it('should return state when arbitrary action is passed', () => {
        const randomAction = () => {
            return {
                type: 'RANDOM_ACTION',
                payload: {}
            };
        };
        expect(words(store.getState(), randomAction())).toEqual(initialState);
    });
});
