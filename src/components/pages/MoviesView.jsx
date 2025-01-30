import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../../redux/features/MovieSlice/MovieSlice'
import { IoHeartSharp } from 'react-icons/io5'
import { Link, useParams } from 'react-router-dom'
import { addToWish } from '../../redux/features/addWishList/MovieWishListSlice'
import { singleMovieSelect } from '../../redux/features/singleViewMovie/SingleMovieSlice'

function MoviesView() {



    const dispatch = useDispatch()
    const fetch = useSelector((state) => state.fetchMovie.movieGet)
    const wishList = useSelector((state) => state.addListMovie)

    const [changes, setChanges] = useState([])
    console.log(changes, "changes")

    useEffect(() => {
 
            dispatch(getMovies())
        
    }, [])



    const handleSingleMovie = (singleMovie) => {

        dispatch(singleMovieSelect(singleMovie))

    }

    const handleAddRemoveMovies = (movie) => {
        setChanges((prev) => {
            if (prev.some(item => item.id === movie.id)) {
                return prev.filter((item) => item.id !== movie.id);
            } else {

                return [...prev, movie];
            }

        });
        dispatch(addToWish(movie));
    };




    return (
        <div className='  bg- '>
            <div className='container    mx-auto flex justify-between items-center py-4 px-6'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                    {fetch.data?.map((movie) => (
                        <div key={movie.id} className="bg-transparent p-4  shadow-lg rounded-lg overflow-hidden">
                            <button onClick={() => handleAddRemoveMovies(movie)}
                                className={`h-8   ${changes.some(item => item.id === movie.id) ? "text-red-600" : "text-gray-500"}`}
                            >
                                <IoHeartSharp className='h-[36px] w-[20px]' ></IoHeartSharp> </button>
                            <Link to={`/singlemovie/${movie.id}`}
                                onClick={() => handleSingleMovie(movie)}> <img
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                    alt={movie.original_title}
                                    className="w-full h-64 object-contain rounded-xl"
                                />
                            </Link>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{movie.original_title}</h3>
                                <p className="text-gray-600 line-clamp-3 mt-2">{movie.overview}</p>
                                <p className="text-sm text-gray-500 mt-2">{new Date(movie.release_date).toLocaleDateString()}</p>
                                <div className="mt-2 flex justify-between items-center">

                                    <div>
                                        <span className="text-yellow-500">{movie.vote_average}</span>
                                        <span className="text-gray-500 ml-2">({movie.vote_count} votes)</span></div>
                                    <div>
                                        <button className=' py-3 px-3 rounded-2xl text-black bg-white hover:bg-blue-500'>Add Watching</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default MoviesView