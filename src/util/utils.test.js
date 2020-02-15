import {testValidity, testRange} from './Utils';

const mockGeneration = {
    letters: [
        {label: 'R',rPos: 0,cPos: 0},
        {label: 'C',rPos: 0,cPos: 1},
        {label: 'S',rPos: 0,cPos: 2},
        {label: 'S',rPos: 0,cPos: 3},
        {label: 'P',rPos: 1,cPos: 0},
        {label: 'N',rPos: 1,cPos: 1},
        {label: 'K',rPos: 1,cPos: 2},
        {label: 'L',rPos: 1,cPos: 3},
        {label: 'T',rPos: 2,cPos: 0},
        {label: 'C',rPos: 2,cPos: 1},
        {label: 'K',rPos: 2,cPos: 2},
        {label: 'H',rPos: 2,cPos: 3},
        {label: 'M',rPos: 3,cPos: 0},
        {label: 'B',rPos: 3,cPos: 1},
        {label: 'U',rPos: 3,cPos: 2},
        {label: 'Y',rPos: 3,cPos: 3}
    ]
};

describe('Utils Test',() => {
    it('should test if the input is valid',  () => {
        expect(testValidity(undefined, 'RCSS', [], mockGeneration)).toEqual(true);
        expect(testValidity(undefined, 'RNKYHL', [], mockGeneration)).toEqual(true);
        expect(testValidity(undefined, 'RYLK', [], mockGeneration)).toEqual(false);
    });

    it('should test if the near index is valid', () => {
        expect(testRange(2, 1)).toEqual(true);
        expect(testRange(0, 3)).toEqual(false);
    })
});


