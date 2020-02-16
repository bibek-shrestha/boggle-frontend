import React from 'react';
import {cleanup, render} from '@testing-library/react';
import Board from '../../component/board/Board';
import {Provider} from 'react-redux';
import store from '../../test-common/test-store';


describe('Board Test', () => {

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