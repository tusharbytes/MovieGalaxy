import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { getMovies } from '../../redux/features/MovieSlice/MovieSlice';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

function MovieSlider() {
    const dispatch = useDispatch();
    const fechingMmovie = useSelector((state) => state.fetchMovie.movieGet);

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    if (!fechingMmovie) return <p>Loading...</p>;

    var settings = {
      
        infinite: true,
        speed: 500,
        slidesToShow: 4 ,
        slidesToScroll: 1
    };

    return (
        <div className='  container        bg-gray-900 text-white'>
            <Slider {...settings}>
                {fechingMmovie.data?.length > 0 ? (
                    fechingMmovie.data.map((movie) => (
                        <div key={movie.id}>
                            <div className="bg-transparent text-white p-4 shadow-lg rounded-lg overflow-hidden">
                                <Link>
                                <img
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                    alt={movie.original_title}
                                    className="w-full h-64 object-contain rounded-xl"
                                /></Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No movies available.</p>
                )}
            </Slider>
        </div>
    );
}

export default MovieSlider;
