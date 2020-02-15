import {ADD_WORD, REMOVE_WORDS, SET_GAME_STATUS, SET_GENERATED_LETTERS} from './actionType';

export const addWord = (validWord) => ({
    type: ADD_WORD,
    payload: {
        validWord
    }
});

export const removeWords = () => ({
    type: REMOVE_WORDS
});

export const setGeneratedLetters = (letters) => ({
    type: SET_GENERATED_LETTERS,
    payload: {
        letters
    }
});

export const setGameStatus = (status) => ({
    type: SET_GAME_STATUS,
    payload: {
        status
    }
});
