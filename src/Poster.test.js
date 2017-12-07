import React from 'react';
import Poster from './Poster';

import { shallow } from 'enzyme';

describe('Poster component ',() => {
    const selectedMovie = 
    {
        Poster: 'http://example.com/',
        Title : 'test'
    };
    it('should return correct Markup when data is available', () => {
        expect(shallow(<Poster selectedMovie={selectedMovie}/>).contains(
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <img className='poster__img' src='http://example.com/' alt='test'/>
        </div>
        )).toBe(true);
    });
});