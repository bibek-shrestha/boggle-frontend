import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import {mockGeneration, validWord} from '../../common/test/constants';
import UserInput from './UserInput';
import axiosMock from '../../__mocks__/axios';

const mockStore = configureMockStore([]);

describe('User Input component test', () => {
    let store;
    beforeEach(() => {
        store = mockStore({
            letters: mockGeneration,
            words: {words: [validWord]}
        });
    });

    afterEach(() => {
        cleanup();
        axiosMock.get.mockReset();
    });

   it('should render the component', () => {
        render(<UserInput store={store}/>);
   });

   describe('Input field', () => {
       it('should change the value of input field', () => {
           const {queryByTestId} = render(<UserInput store={store}/>);
           const userInputField = queryByTestId('user-input');
           fireEvent.change(userInputField, {target: {value: 'test'}});
           expect(userInputField.value).toBe('test');
       });
   });

   describe('Check button test', () => {
      it('should be disabled at initial state', () => {
         const {queryByTestId} = render(<UserInput store={store}/>);
         expect(queryByTestId('check-button').disabled).toBe(true);
      });

       it('should be active once the input field is populated', () => {
           const {queryByTestId} = render(<UserInput store={store}/>);
           fireEvent.change(queryByTestId('user-input'), {target: {value: 'test'}});
           expect(queryByTestId('check-button').disabled).toBe(false);
       });

       it('should trigger and event', () => {
           axiosMock.get.mockResolvedValueOnce({data: { data: { isvalid: true }, status: 'ok'}});
           const {queryByTestId} = render(<UserInput store={store}/>);
           fireEvent.change(queryByTestId('user-input'), {target: {value: 'RCSS'}});
           fireEvent.click(queryByTestId('check-button'));
           expect(axiosMock.get).toHaveBeenCalled();
       });

       it('should trigger and event', () => {
           const userInput = render(<UserInput store={store}/>);
           fireEvent.change(userInput.queryByTestId('user-input'), {target: {value: 'test'}});
           fireEvent.click(userInput.queryByTestId('check-button'));
           expect(axiosMock.get).not.toHaveBeenCalled();
           expect(userInput.container.getElementsByClassName('error')).toBeDefined();
       });
   });
});
