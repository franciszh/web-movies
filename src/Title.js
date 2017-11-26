import React from 'react';

const Title = ({selectedMovie}) => {
    if(!selectedMovie){
        return null;
    }
    return(
        <div className='col-sm-12 title__wrap'>
            <h1>{selectedMovie.Title}</h1>
        </div> 
    );

}
export default Title;