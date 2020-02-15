import { SET_GAME_STATUS } from '../action/actionType';

const initialState = {
    status: 0
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_GAME_STATUS: {
            const status = action.payload.status;
            return {
                ...state,
                status
            };
        }
        default:
            return state;
    }
}