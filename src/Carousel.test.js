import React from 'react';
import MovieCarousel from './Carousel';

import { shallow } from 'enzyme';

describe('Carousel ', () => {
    it('should have the correct props for each movie', () => {
        const movies = [
            {
                Id : '1',
                Poster : 'http://example.com',
                Title : 'show',
                Genre : 'test'
            }
        ];
        const shallowMovieCarousel = shallow(<MovieCarousel movies={movies} onMovieSelect={jest.fn()} genre={null}/>);
        expect(shallowMovieCarousel.find('.carousel__img').prop('alt')).toEqual('show');
        expect(shallowMovieCarousel.find('.carousel__img').prop('src')).toEqual('http://example.com');
    });
    
    it('should display all the movies when genre is not available', () => {
        const movies = [
            {
                Id : '1',
                Poster : 'http://example.com',
                Title : 'test'
            },
            {
                Id : '2',
                Poster : 'http://example.com',
                Title : 'test'
            },
            {
                Id : '3',
                Poster : 'http://example.com',
                Title : 'test'
            }
        ];
        const shallowMovieCarousel = shallow(<MovieCarousel movies={movies} onMovieSelect={jest.fn()} genre={null}/>);
        expect(shallowMovieCarousel.find('.carousel__img')).toHaveLength(3);
    });

    it('should display the correct movie when genre is available', () => {
        const movies = [
            {
                Id : '1',
                Poster : 'http://example.com',
                Title : 'show',
                Genre : 'test'
            },
            {
                Id : '2',
                Poster : 'http://example.com',
                Title : 'show',
                Genre : 'test'
            },
            {
                Id : '3',
                Poster : 'http://example.com',
                Title : 'gone',
                Genre: 'Action'
            }
        ];
        const genre = 'test';
        const shallowMovieCarousel = shallow(<MovieCarousel movies={movies} onMovieSelect={jest.fn()} genre={genre}/>);
        expect(shallowMovieCarousel.find('.carousel__img')).toHaveLength(2);
        expect(shallowMovieCarousel.find('[alt="gone"]')).toHaveLength(0);
    });

    it('should have callback invoked when the image is clicked', () => {
        const callback = jest.fn();
        const movies = [
            {
                Id : '1',
                Poster : 'http://example.com',
                Title : 'show',
                Genre : 'test'
            }
        ];
        const genre = 'test';
        const shallowMovieCarousel = shallow(<MovieCarousel movies={movies} onMovieSelect={callback} genre={genre}/>);
        shallowMovieCarousel.find('.carousel__img').simulate('click');
        expect(callback.mock.calls.length).toBe(1);
    });

});