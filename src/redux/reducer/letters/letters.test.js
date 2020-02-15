import {setGeneratedLetters} from "../../action/action";
import {mockGeneration} from "../../../common/test/constants";

describe('Reducers for letters', () => {
    it('should handle set generated letters and set letters to state', function () {
        expect(setGeneratedLetters(undefined, setGeneratedLetters(mockGeneration.letters))).toEqual({
            letters: [...mockGeneration.letters]
        });
    });

    it('should not do any thing and set the state to initial state', function () {
        const randomAction = (letters) => {
            return { type: 'RANDOM_ACTION', payload: {letters}};
        };
        expect(setGeneratedLetters(undefined, randomAction(mockGeneration.letters))).toEqual({
            letters: []
        });
    });
});
