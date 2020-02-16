import React from 'react';
import {cleanup, render} from '@testing-library/react';
import Points from './Points';
import configureMockStore from 'redux-mock-store';
import {validWord} from '../../common/test/constants';

const mockStore = configureMockStore([]);

test('should render', () => {
    const store = mockStore({words: { words: [validWord]}});
   render(<Points store={store}/>);
});

describe('Points Component test', () => {

    afterEach(() => {
        cleanup();
    });

    const store = mockStore({words: { words: [validWord]}});
    it('should render points table', () => {
        // const {queryByTestId} = render(<Points store={store}/>);
        // queryByTestId('points-table').
    });
});