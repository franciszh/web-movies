import React from 'react';

const Genre = ({onGenreUpdate, genres}) => {
    const genreOptions= genres.map(genre => {
            return (
                <option key={genre} value={genre}>{genre}</option>
            );  
    });
    return(
        <select className='genre__select' defaultValue='' onChange={(e)=>onGenreUpdate(e.target.value)}>
           <option value=''>Genre</option>
           {genreOptions}
        </select>    
    );

}
export default Genre;