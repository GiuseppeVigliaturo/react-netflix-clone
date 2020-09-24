import React from 'react';

/* passo props=this.state e poi accedo ai movies con props.movies 
altrimenti con la destrutturazione mi prendo {movies} direttamente  */
export default function MovieItem({movie}) {
    return (  
        
              <div className="card col-md-3">
             <img className="card-img-top" src={movie.Poster} alt={movie.Title} />
             <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <button  className="btn btn-primary">VIEW DETAIL</button>
            </div>
            </div>
     
   
    )
    }