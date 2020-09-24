import React from 'react';
import MovieItem from './moveitem';

/* passo props=this.state e poi accedo ai movies con props.movies 
altrimenti con la destrutturazione mi prendo {movies} direttamente  */
export default function MovieList({movies})
{
   if (!movies) {
      return null
   }
   return (

      <div className ='row'>
           {
       movies.map((movie) => < MovieItem key = {movie.imdbID} movie = {movie}/>)
     
           }
      </div>
   )
 }

