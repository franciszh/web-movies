import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

describe('The App ', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});


describe('The function ', () => {
  describe('createGenresAryWithMovies ', () => {
    test('should generate correct array based on input', () => {
      const movies = [
        {
          Genre: 'Action, Love'
        },
        {
          Genre: 'History'
        },
        {
          Genre: 'Drama, Crime'
        },
        {
          Genre: 'Action'
        }
      ];
      const output = ['Action','Love','History','Drama','Crime'];
      const wrapper = renderer.create(<App />);
      const instance = wrapper.getInstance();
      expect(instance.createGenresAryWithMovies(movies)).toEqual(output);
    });

    test('should generate empty array when input is empty', () => {
      const movies = [];
      const output = [];
      const wrapper = renderer.create(<App />);
      const instance = wrapper.getInstance();
      expect(instance.createGenresAryWithMovies(movies)).toEqual(output);
    });
  });

  describe('updateStateWithMovies ', () => {
    test('should update the states correctly', () => {
      const genresMock = jest.fn();
      genresMock.mockReturnValue(['Action']);
      const wrapper = renderer.create(<App />);
      const instance = wrapper.getInstance();
      const movies = [];
      instance.createGenresAryWithMovies = genresMock;
      instance.updateStateWithMovies(movies);
      expect(instance.state.genres).toEqual(['Action']);
      expect(instance.state.movies).toEqual([]);
      expect(instance.state.selectedMovie).toBeUndefined();
    });
  });
});

