import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import NewGame from '../../component/newgame/Newgame';
import axiosMock from '../../__mocks__/axios';
import {mockGeneration} from '../../test-common/constants';
import store from '../../test-common/test-store';


describe('Button click', () => {

    afterEach(() => {
        axiosMock.get.mockReset();
       cleanup();
    });

    it('should render', () => {
        render(<NewGame store={store}/>);
    });

    it('should perform button click', () => {
        axiosMock.get.mockResolvedValueOnce({data: { data: mockGeneration.letters, status: 'ok'}});
        const {queryByTestId} = render(<NewGame store={store}/>);
        fireEvent.click(queryByTestId('new-game-button'));
        expect(axiosMock.get).toHaveBeenCalledTimes(1);
        expect(axiosMock.get).toHaveBeenCalledWith('http://localhost:3000/api/v1/generate');
    });
});
