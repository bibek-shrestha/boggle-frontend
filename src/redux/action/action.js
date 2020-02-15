import {ADD_WORD, SET_USER_INPUT, SET_GENERATED_LETTERS, SET_GAME_STATUS, REMOVE_WORDS} from './actionType';

export const addWord = (validWord) => ({
    type: ADD_WORD,
    payload: {
        validWord
    }
});

export const removeWords = () => ({
    type: REMOVE_WORDS
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

export const setGameStatus = (status) => ({
    type: SET_GAME_STATUS,
    payload: {
        status
    }
});
