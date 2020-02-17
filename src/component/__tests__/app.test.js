import React from 'react';
import {cleanup, render} from '@testing-library/react';
import {Provider} from 'react-redux';
import store from '../../test-common/test-store';
import App from '../App';

describe('App component test', () => {
    afterEach(() => cleanup());

    it('should render', () => {
        render(<Provider store={store}><App/></Provider>);
    });
});
