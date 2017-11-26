import React from 'react';

const Poster = ({selectedMovie}) => {
    if(!selectedMovie){
        return null;
    }
    return(
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <img className='poster__img' src={selectedMovie.Poster} alt={selectedMovie.Title}/>
        </div>    
    );

}
export default Poster;