import { ADD_WORD } from '../action/actionType';

const initialState = {
    words: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_WORD: {
            const {word} = action.payload;
            return {
                ...state,
                words: [...state.words, word]
            };
        }
        default:
            return state;
    }
}
