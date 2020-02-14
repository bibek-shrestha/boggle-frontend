import { ADD_WORD, SET_USER_INPUT, SET_GENERATED_LETTERS } from './actionType';

export const addWord = word => ({
    type: ADD_WORD,
    payload: {
        word
    }
});

export const setUserInput = input => ({
    type: SET_USER_INPUT,
    payload: {
        input
    }
});

export const setGeneratedLetters = (letters) => ({
    type: SET_GENERATED_LETTERS,
    payload: {
        letters
    }
});
