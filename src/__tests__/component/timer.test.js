import React from 'react';
import {cleanup, render} from '@testing-library/react';
import Timer from '../../component/timer/Timer';
import store from '../../test-common/test-store';

describe('Timer component test', () => {

    afterEach(() => {
        cleanup();
    });

    it('should render', () => {
        render(<Timer store={store}/>);
    });

});
