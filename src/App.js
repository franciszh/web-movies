import React, { Component } from 'react';
import { getMoviesFromApiAsync} from './Service';
import MovieCarousel from './Carousel';
import Poster from './Poster';
import Meta from './Meta';
import Title from './Title';
import Genre from './Genre'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        movies : [],
        selectedMovie : null,
        genre : '',
        genres : []
    };
  }
  updateStateWithMovies = (movies) => {
    this.setState({
      movies,
      selectedMovie:movies[0],
      genres: this.createGenresAryWithMovies(movies)
    });
  }

  createGenresAryWithMovies = (movies) => {
   let genres = [];
   for (let movie of movies){
    movie.Genre.split(',').forEach((e) => {
      let trimmedGenre = e.trim();
      genres.includes(trimmedGenre) || genres.push(trimmedGenre);
    });
   }
   return genres;
  }

  componentDidMount() {
    getMoviesFromApiAsync().then((res) => {
      this.updateStateWithMovies(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <Title selectedMovie={this.state.selectedMovie}/>
            <Poster selectedMovie={this.state.selectedMovie}/>
            <Meta selectedMovie={this.state.selectedMovie}/>
          </div>
          <div className="clearfix">
            <Genre onGenreUpdate={genre=>this.setState({genre})} genres={this.state.genres}/>
          </div>  
          <MovieCarousel genre={this.state.genre} movies={this.state.movies} onMovieSelect={selectedMovie => this.setState({selectedMovie})}/>
        </div>
      </div>
    );
  }
}

export default App;
