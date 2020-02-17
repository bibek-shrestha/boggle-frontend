import React from 'react';
import {cleanup, render} from '@testing-library/react';
import Points from '../Points';
import store from '../../../test-common/test-store';

describe('Points Component test', () => {

    afterEach(() => {
        cleanup();
    });

    it('should render points table', () => {
        render(<Points store={store}/>);
    });

    it('should have correct data', () => {
        const thValues = ['Word', 'Points', 'Total', '4'];
        const tdValues = ['TEST', '4'];
        const pointsComponent = render(<Points store={store}/>);
        expect(pointsComponent.container.querySelectorAll('tr')).toHaveLength(3);
        pointsComponent.container.querySelectorAll('th').forEach((val, index) => {
            expect(val.firstChild.nodeValue).toBe(thValues[index]);
        });
        pointsComponent.container.querySelectorAll('td').forEach((val, index) => {
            expect(val.firstChild.nodeValue).toBe(tdValues[index]);
        });
    });
});
