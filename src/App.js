import React, { Component } from 'react';
import { getMoviesFromLocalJson } from './Service';
import MovieCarousel from './Carousel';
import Poster from './Poster';
import Meta from './Meta';
import Title from './Title';
import Genre from './Genre'

import MovieJson from './data.json'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        movies : [],
        selectedMovie : null,
        genre : ''
    };
  }
  updateStateWithMovie = (movies) => {
    this.setState({movies,selectedMovie:movies[0]});
  }
  componentDidMount() {
    getMoviesFromLocalJson(MovieJson, this.updateStateWithMovie);
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
            <Genre onGenreUpdate={genre=>this.setState({genre})}/>
          </div>  
          <MovieCarousel genre={this.state.genre} movies={this.state.movies} onMovieSelect={selectedMovie => this.setState({selectedMovie})}/>
        </div>
      </div>
    );
  }
}

export default App;
