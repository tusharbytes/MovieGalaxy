import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getMovies } from '../../redux/features/MovieSlice/MovieSlice';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { singleMovieSelect } from '../../redux/features/singleViewMovie/SingleMovieSlice';
import Loader from '../common/Loader';

function MovieSlider() {
  const dispatch = useDispatch();
  const fetchingMovie = useSelector((state) => state.fetchMovie.movieGet);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const handleView = (movie) => {
    dispatch(singleMovieSelect(movie));
  };

  if (!fetchingMovie) return <Loader />;

  return (
    <div className="container mx-auto py-6 ">
      <h2 className="text-2xl font-bold text-white mb-6">
          </h2>
      <Slider {...settings}>
        {fetchingMovie.data?.length > 0 ? (
          fetchingMovie.data.map((movie) => (
            <div key={movie.id} className="px-2">
              <div className="relative p-4 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl bg-white">
                <Link to={`/singlemovie/${movie.id}`} onClick={() => handleView(movie)}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.original_title}
                    className="w-full h-48 md:h-64 object-cover rounded-xl transition-all duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center rounded-b-xl">
                    <h3 className="text-lg font-semibold">{movie.original_title}</h3>
                  </div>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No movies available.</p>
        )}
      </Slider>
    </div>
  );
}

export default MovieSlider;
