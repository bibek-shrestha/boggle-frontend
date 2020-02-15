import {ADD_WORD, REMOVE_WORDS} from '../action/actionType';

const initialState = {
    words: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_WORD: {
            const {validWord} = action.payload;
            return {
                ...state,
                words: [...state.words, validWord]
            };
        }
        case REMOVE_WORDS: {
            return initialState;
        }
        default:
            return state;
    }
}
