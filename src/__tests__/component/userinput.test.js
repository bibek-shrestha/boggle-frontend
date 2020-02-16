import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import UserInput from '../../component/userinput/UserInput.js';
import axiosMock from '../../__mocks__/axios';
import store from '../../test-common/test-store';

describe('User Input component test', () => {

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
           expect(axiosMock.get).toHaveBeenCalledWith('http://localhost:3000/api/v1/validate', {'params': {'word': 'RCSS'}});
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
