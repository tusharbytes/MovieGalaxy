import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../redux/features/MovieSlice/MovieSlice';
import { IoHeartSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { addToWish } from '../../redux/features/addWishList/MovieWishListSlice';
import { singleMovieSelect } from '../../redux/features/singleViewMovie/SingleMovieSlice';
import Loader from '../common/Loader';
import { toast, ToastContainer } from 'react-toastify';
import InputField from '../common/InputField';

function MoviesView() {
  const dispatch = useDispatch();
  const fetch = useSelector((state) => state.fetchMovie);
  const [changes, setChanges] = useState([]);
  const [search, setSearch] = useState("")

useEffect(() => {
  dispatch(getMovies());
}, [dispatch]);


const handleSearch = (e) => {
  setSearch(e.target.value);
};

  const handleSingleMovie = (singleMovie) => {
    dispatch(singleMovieSelect(singleMovie));
  };

  const handleAddRemoveMovies = (movie) => {
    setChanges((prev) => {
      if (prev.some((item) => item.id === movie.id)) {
        toast.error("Remove wish List")
        return prev.filter((item) => item.id !== movie.id);
      } else {
        toast.success("Add wish List")
        return [...prev, movie];
      }
    });
    dispatch(addToWish(movie));
  };

  return (
    <div className="min-h-screen bg-[] py-8">
      <div className='px-2 py-2 container w-full md:flex md:justify-end flex justify-center  '>
        <input
          className='p-1 md:p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-red-400'
          placeholder='Search...'
          value={search}
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <ToastContainer />
      {fetch.loading && <Loader />}

      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-semibold mb-6 text-center text-white font-serif">🎬 Now Showing</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fetch?.movieGet?.data?.filter((movie) => movie.original_title.toLowerCase().includes(search.toLowerCase())).map((movie) => (
            <div
              key={movie.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden relative"
            >
              {/* Wishlist Button */}
              <button
                onClick={() => handleAddRemoveMovies(movie)}
                className="absolute top-3 right-3 z-10 text-xl"
              >
                <IoHeartSharp
                  className={`transition-transform duration-200 ${changes.some((item) => item.id === movie.id)
                      ? 'text-red-600 scale-125'
                      : 'text-gray-400 hover:text-red-500'
                    }`}
                />
              </button>

              {/* Poster */}
              <Link to={`/singlemovie/${movie.id}`} onClick={() => handleSingleMovie(movie)}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.original_title}
                  className="w-full h-64 object-cover"
                />
              </Link>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{movie.original_title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{movie.overview}</p>

                <p className="text-gray-400 text-xs mt-2">
                  Release: {new Date(movie.release_date).toLocaleDateString()}
                </p>

                {/* Ratings & Button */}
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <span className="text-yellow-500 font-bold">{movie.vote_average}</span>
                    <span className="text-gray-500 ml-1 text-sm">({movie.vote_count} votes)</span>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoviesView;
