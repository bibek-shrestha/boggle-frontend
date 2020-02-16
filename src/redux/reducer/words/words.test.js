import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import words from './words';
import {addWord, removeWords} from '../../action/action';
import {validWord} from '../../../common/test/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Reducer for words', () => {
    it('should set the words in state', function () {
        expect(words(undefined, addWord(validWord))).toEqual({
            words: [validWord]
        });
    });

    it('should reset the words state', () => {
        const store = mockStore({words:[validWord]});
        expect(words(store.getState(), removeWords())).toEqual({
            words: []
        });
    });

    it('should return state when arbitrary action is passed', () => {
        const store = mockStore({words:[validWord]});
        const randomAction = () => {
            return {
                type: 'RANDOM_ACTION',
                payload: {}
            };
        };
        expect(words(store.getState(), randomAction())).toEqual({
            words:[validWord]
        });
    });
});