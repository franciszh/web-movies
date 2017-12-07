import React from 'react';
import Title from './Title';

import { shallow } from 'enzyme';

describe('Title component ',() => {
    const selectedMovie = {Title: 'test'};
    it('should return correct Markup when data is available', () => {
        expect(shallow(<Title selectedMovie={selectedMovie}/>).contains(
        <div className='col-sm-12 title__wrap'><h1>test</h1></div>
        )).toBe(true);
    });
});