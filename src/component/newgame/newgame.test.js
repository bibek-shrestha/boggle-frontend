import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import NewGame from './Newgame';
import axiosMock from './../../__mocks__/axios';
import {mockGeneration} from '../../common/test/constants';

const mockStore = configureMockStore([]);

describe('Button click', () => {

    afterEach(() => {
        axiosMock.get.mockReset();
       cleanup();
    });

    it('should render', () => {
        const store = mockStore('');
        render(<NewGame store={store}/>);
    });

    it('should perform button click', () => {
        const store = mockStore('');
        axiosMock.get.mockResolvedValueOnce({data: { data: mockGeneration.letters, status: 'ok'}});
        const {queryByTestId} = render(<NewGame store={store}/>);
        fireEvent.click(queryByTestId('new-game-button'));
        expect(axiosMock.get).toHaveBeenCalledTimes(1);
        expect(axiosMock.get).toHaveBeenCalledWith('http://localhost:3000/api/v1/generate');
    });
});
