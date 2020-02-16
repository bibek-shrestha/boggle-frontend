import {getGameStatus, getGeneratedLetters, getWordsState} from '../../redux/selector/selectors';
import store from '../../test-common/test-store';
import {mockGeneration, validWord} from '../../test-common/constants';


describe('Tests for selectors', () => {
    describe('Letter selectors', () => {
        it('should retrieve the data for letters', function () {
            expect(getGeneratedLetters(store.getState())).toEqual(mockGeneration);
        });
    });
    describe('Word selectors', () => {
        it('should retrieve all the saved words', function () {
            expect(getWordsState(store.getState())).toEqual({
                words: [validWord]
            });
        });
    });
    describe('Game status selectors', () => {
        it('should retrieve all current game status', function () {
            expect(getGameStatus(store.getState())).toEqual({
                status: 0
            });
        });
    });
});