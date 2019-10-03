import Movie from './Movie.jsx';
import React from 'react';
import movies from './movies.js'

class MovieList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        {movies.map(movie => <Movie name = {movie.title}/>)}
      </div>
    );
  }
}
export default MovieList;