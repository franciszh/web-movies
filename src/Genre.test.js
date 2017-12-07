import React from 'react';
import Genre from './Genre';

import { shallow } from 'enzyme';

describe('Genre component ', () => {
    it('should have one drop down option if the data is not ready', () => {
        const genres = [];
        expect(shallow(<Genre genres={genres} onGenreUpdate={jest.fn()}/>).find('option')).toHaveLength(1);
    });

    it('should have correct number of dropdown options if the data is ready', () => {
        const genres = ['Action', 'History', 'Romance'];
        expect(shallow(<Genre genres={genres} onGenreUpdate={jest.fn()}/>).find('option')).toHaveLength(4);
    });
});