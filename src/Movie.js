import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


function Movie({id, title, year, summary, poster, genres}){
    return (
         <div className='movie'>
             <img className='poster' src={poster} alt={title} />
             <div className='movie_data'>
                 <div className='movie_content'>
                    <h3 className='movie_title'>{title}</h3>                 
                    <ul className='genres'>{ genres.map((gen,index ) => (
                        <li className='genres_genre' key={index}>{gen}</li>
                    ))}</ul>
                    <p className='movie_summary'>{summary}</p>                 
                 </div>
                 <hr />
                 <h5 className='movie_year'>{year}</h5>
             </div>
         </div>         
    )
    
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,   
    year : PropTypes.number.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}; 

export default Movie;