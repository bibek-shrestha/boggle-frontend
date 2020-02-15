import {setGeneratedLetters} from '../../action/action';
import {mockGeneration} from '../../../common/test/constants';
import letters from './letters';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Reducers for letters', () => {
    it('should handle set generated letters and set letters to state', () => {
        expect(letters(undefined, setGeneratedLetters(mockGeneration.letters))).toEqual({
            letters: [...mockGeneration.letters]
        });
    });

    it('should not do any thing and set the state to initial state', () => {
        const store = mockStore({letters: [...mockGeneration.letters]});
        const randomAction = (letters) => {
            return { type: 'RANDOM_ACTION', payload: {letters}};
        };
        expect(letters(store.getState(), randomAction(mockGeneration.letters))).toEqual({
            letters: [...mockGeneration.letters]
        });
    });
});
