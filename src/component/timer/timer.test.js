import React from 'react';
import {cleanup, render} from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import Timer from './Timer';

const mockStore = configureMockStore([]);

jest.useFakeTimers();

describe('Timer component test', () => {
    let store;
    beforeEach(() => {
        store = mockStore('');
        beforeEach(() => {
            jest.spyOn(global, 'setTimeout');
        });
    });

    afterEach(() => {
        cleanup();
    });

    it('should render', () => {
        render(<Timer store={store}/>);
    });

});
