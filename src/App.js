import React, { Component } from 'react';
import './App.css';
import MovieList from './components/movielist';
import Navbar from './components/navbar';
const APIKEY ='764a49a9';
const URLAPI ='http://www.omdbapi.com/';

function fetchMovies(search) {
  return fetch(URLAPI + '?apikey=' + APIKEY + '&s=' + search)
  .then(res => res.json())
  //.then(result => console.log(result))
  
}



class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      movies:[],
      totalCount:0
    }
    
  }

  searchMovies = (title = '') => {
    if (title.length < 3) {
      return
    }
    fetchMovies(title).then(res => {

      this.setState({
        movies: res.Search
      })
    })
  }
/* una volta che il componente è stato montato io faccio la chiamata e aggiorno lo stato */
  componentDidMount() {
   this.searchMovies('')
  }

  render (){

    return (
      <React.Fragment>
      <Navbar onSearchTerm = {this.searchMovies} />
      <div className="container">
       <h1 className="mg-top-100 text-center">Movies & Series</h1>
       <MovieList movies={this.state.movies} />
      </div>
      </React.Fragment>
    );
  }
 
}

export default App;
