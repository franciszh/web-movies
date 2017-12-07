import React from 'react';
import Meta from './Meta';

import { shallow } from 'enzyme';

describe('Meta component ',() => {
    const selectedMovie = 
    {
        Country: 'Mars',
        Director : 'Bruno Mars',
        Genre : 'Action, History'
    };
    it('should return correct Markup when data is available', () => {
        expect(shallow(<Meta selectedMovie={selectedMovie}/>).contains(
        <div className='col-sm-12 col-md-6 col-lg-8 meta__wrap'>
            <p key='Country' >Country : Mars</p>
            <p key='Director' >Director : Bruno Mars</p>
            <p key='Genre' >Genre : Action, History</p>
        </div>
        )).toBe(true);
    });
});