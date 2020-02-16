import React from 'react';
import {render, cleanup} from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import Board from './Board';
import {Provider} from 'react-redux';
import store from './../../redux/store'

const mockStore = configureMockStore([]);

describe('Board Test', () => {
    beforeEach(() => {
    });

    afterEach(() => {
        cleanup();
    });

    it('should render', () => {
        render(<Provider store={store}><Board/></Provider>);
    });

    it('should not render the game board', () => {
        const boardComponent = render(<Provider store={store}><Board/></Provider>);
        expect(boardComponent.container.getElementsByTagName('Points')).toBeDefined();
    });
});