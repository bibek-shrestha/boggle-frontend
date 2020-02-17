import {testValidity, testRange} from '../Utils';
import {mockGeneration} from '../../test-common/constants';

describe('Utils Test', () => {
    it('should test if the input is valid', () => {
        expect(testValidity(undefined, 'RCSS', [], mockGeneration)).toEqual(true);
        expect(testValidity(undefined, 'RNKYHL', [], mockGeneration)).toEqual(true);
        expect(testValidity(undefined, 'RYLK', [], mockGeneration)).toEqual(false);
        expect(testValidity(undefined, 'RPTMBUYHLSSC', [], mockGeneration)).toEqual(true);
        expect(testValidity(undefined, 'RPTMBUYHLSSCR', [], mockGeneration)).toEqual(false);
    });

    it('should test if the near index is valid', () => {
        expect(testRange(2, 1)).toEqual(true);
        expect(testRange(0, 3)).toEqual(false);
    })
});


