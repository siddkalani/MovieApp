import React, { cloneElement, useEffect } from 'react'
import { useGlobalFunction } from './context'
import { NavLink } from 'react-router-dom';
import "./App.css"

const Movies = (props) => {
    const {movie} = useGlobalFunction();

      return (
        
        <section className="movie-page">
        <div className='container grid grid-4-col'> 
          {movie.map((Currmovie)=>{
            const{ imdbID , Title , Poster} = Currmovie;
            return(
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="card">
                  <div className="card-info">
                    <h2>{Title.length>15?Title.substring(0,15)+"...":Title}</h2>
                    <img src={Poster} alt={imdbID}/>
                  </div>
                </div>
              </NavLink>              
            )
          })}
        </div>
        </section>
    )
  }

export default Movies