import React from 'react';
import {cleanup, render} from '@testing-library/react';
import Board from '../../component/board/Board';
import {Provider} from 'react-redux';
import store from '../../test-common/test-store';
import {setGameStatus} from '../../redux/action/action';
import {mockGeneration} from '../../test-common/constants';

describe('Board Test', () => {

    afterEach(() => {
        cleanup();
    });

    it('should render', () => {
        render(<Provider store={store}><Board dimension="4"/></Provider>);
    });

    it('should not render board table', () => {
        const boardComponent = render(<Provider store={store}><Board dimension="4"/></Provider>);
        expect(boardComponent.container.querySelector('.board-table')).toBeFalsy();
    });

    it('should render 4X4 grid board and characters', () => {
        const boardComponent = render(<Provider store={store}><Board dimension="4"/></Provider>);
        store.dispatch(setGameStatus(1));
        expect(boardComponent.container.querySelector('.board-table')).toBeTruthy();
        expect(boardComponent.container.querySelector('.board-table').querySelectorAll('tr')).toHaveLength(4);
        expect(boardComponent.container.querySelector('.board-table').querySelectorAll('td')).toHaveLength(16);
        boardComponent.getAllByTestId('board-data').forEach((v, index) => {
            expect(v.firstChild.nodeValue).toBe(mockGeneration.letters[index].label);
        });
    });
});