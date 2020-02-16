import {setGeneratedLetters} from '../../redux/action/action';
import {mockGeneration} from '../../test-common/constants';
import letters from '../../redux/reducer/letters/letters';
import store, {initialState} from '../../test-common/test-store';

describe('Reducers for letters', () => {
    it('should handle set generated letters and set letters to state', () => {
        expect(letters(undefined, setGeneratedLetters(mockGeneration.letters))).toEqual({
            letters: [...mockGeneration.letters]
        });
    });

    it('should not do any thing and set the state to initial state', () => {
        const randomAction = (letters) => {
            return { type: 'RANDOM_ACTION', payload: {letters}};
        };
        expect(letters(store.getState(), randomAction(mockGeneration.letters))).toEqual(initialState);
    });
});
