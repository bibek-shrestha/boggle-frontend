import game from '../game';
import {setGameStatus} from '../../../action/action';

describe('Reducer for game status', () => {
   it('should change the status of game to 1', () => {
       expect(game(undefined, setGameStatus(1))).toEqual({
           status: 1
       });
   });

    it('should have initial state of the game', () => {
        const randomAction = () => {
            return {type: 'RANDOM_OP', payload: {}};
        };
        expect(game(undefined, randomAction())).toEqual({
            status: 0
        });
    });
});