import React from 'react';

const Genre = ({onGenreUpdate}) => {
    return(
        <select className='genre__select' defaultValue='' onChange={(e)=>onGenreUpdate(e.target.value)}>
           <option value=''>Genre</option>
           <option value='Drama'>Drama</option>
           <option value='Adventure'>Adventure</option>
           <option value='Thriller'>Thriller</option>
           <option value='Crime'>Crime</option>
           <option value='Sci-Fi'>Sci-Fi</option>
           <option value='Animation'>Animation</option>
           <option value='Fantasy'>Fantasy</option>
        </select>    
    );

}
export default Genre;