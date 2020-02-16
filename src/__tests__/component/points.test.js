import React from 'react';
import {cleanup, render} from '@testing-library/react';
import Points from '../../component/points/Points';
import store from '../../test-common/test-store';

describe('Points Component test', () => {

    afterEach(() => {
        cleanup();
    });

    it('should render points table', () => {
        render(<Points store={store}/>);
    });
});