import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {mockGeneration, validWord} from "../../common/test/constants";
import {getGeneratedLetters, getWordsState, getGameStatus} from "./selectors";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Tests for selectors', () => {
    describe('Letter selectors', () => {
        it('should retrieve the data for letters', function () {
            const store = mockStore({letters: mockGeneration});
            expect(getGeneratedLetters(store.getState())).toEqual(mockGeneration);
        });
    });
    describe('Word selectors', () => {
        it('should retrieve all the saved words', function () {
            const store = mockStore({words: {words: [validWord]}});
            expect(getWordsState(store.getState())).toEqual({
                words: [validWord]
            });
        });
    });
    describe('Game status selectors', () => {
        it('should retrieve all current game status', function () {
            const store = mockStore({game: {status: 1}});
            expect(getGameStatus(store.getState())).toEqual({
                status: 1
            });
        });
    });
});