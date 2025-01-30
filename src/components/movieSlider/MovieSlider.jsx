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
import { singleMovieSelect } from '../../redux/features/singleViewMovie/SingleMovieSlice';

function MovieSlider() {
    const dispatch = useDispatch();
    const fechingMmovie = useSelector((state) => state.fetchMovie.movieGet);

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    if (!fechingMmovie) return <p>Loading...</p>;

    // MovieSlider.jsx
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // Tablets
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 768, // Mobile Landscape
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480, // Mobile Portrait
                settings: { slidesToShow: 1 }
            }
        ]
    };
    const handleView = (movie)=>{
        dispatch(singleMovieSelect(movie))
        }

    return (
        <div className="container mx-auto flex-row justify-between items-center py-4 px-6  ">
            <Slider {...settings}>
                {fechingMmovie.data?.length > 0 ? (
                    fechingMmovie.data.map((movie) => (
                        <div key={movie.id}>
                            <div className="p-4 shadow-lg rounded-lg overflow-hidden">
                                <Link to={`/singlemovie/${movie.id}`} onClick={()=>handleView(movie)}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                        alt={movie.original_title}
                                        className="w-full h-48 md:h-64 object-fill rounded-xl"
                                    />
                                </Link>
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
