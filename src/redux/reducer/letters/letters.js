import {SET_GENERATED_LETTERS} from '../../action/actionType';

const initialState = {
    letters: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_GENERATED_LETTERS: {
            const letters = action.payload.letters;
            return {
                ...state,
                letters
            };
        }
        default:
            return state;
    }
}
