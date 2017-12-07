import React from 'react';
import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MovieCarousel = ({movies, onMovieSelect, genre}) => {
    if(!movies.length){
        return null;
    }
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 4
            }
        },{
            breakpoint: 1090,
            settings: {
              slidesToShow: 3
            }
        }, {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            }
        }, {
            breakpoint: 605,
            settings: {
              slidesToShow: 1
            }
        }]
    };
    const movieItems = movies.map(movie => {
        if(!genre || movie.Genre.includes(genre)){
            return (
                <div key={movie.Id}> 
                    <img className='carousel__img' onClick={()=>onMovieSelect(movie)} src={movie.Poster} alt={movie.Title}/>
                </div>    
            );  
        }else{
            return null;
        }
    });


    return (
        <div className='carousel__container'>
            <Carousel {...settings}>
                {movieItems}
            </Carousel>
        </div>
    );

}

export default MovieCarousel;