import { SET_USER_INPUT } from '../action/actionType';

const initialState = {
    input: ''
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_USER_INPUT: {
            const input = action.payload.input;
            return {
                ...state,
                input
            };
        }
        default:
            return state;
    }
}