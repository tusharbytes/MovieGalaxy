import React from 'react'
import { IoHeartSharp } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { addToWish } from '../../../redux/features/addWishList/MovieWishListSlice'
import { RiDeleteBin6Line } from 'react-icons/ri'

function MovieWishList() {

  const wishList = useSelector((state) => state.addListMovie)
  const dispatch = useDispatch()

  const handleRemove = (movie) => {
    dispatch(addToWish(movie))
    console.log(movie.id,"handleRemove")



  }

  return (
    <div className="bg-gray-800 min-h-screen flex gap-2 flex-col items-center p-6">
      {wishList.movieAdd && wishList.movieAdd.length > 0 ? (
        wishList.movieAdd.map((movie) => (
          <div
            key={movie.id}
            className="container mx-auto bg-gray-900 text-white shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 rounded-lg"
          >
            {/* Left: Movie Poster */}
            <div className="w-full md:w-1/3 flex justify-center">
              <Link to={`/singlemovie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.original_title}
                  className="w-full md:w-64 h-96 object-cover rounded-lg"
                />
              </Link>
            </div>

            {/* Right: Movie Details */}
            <div className="w-full md:w-2/3 p-4 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-semibold">{movie.original_title}</h3>
                <button onClick={() => handleRemove(movie)} className="text-red-800 text-xl p-2">
                <RiDeleteBin6Line />
                </button>
              </div>
              <p className="text-gray-300 line-clamp-3 mt-2">{movie.overview}</p>
              <p className="text-sm text-gray-500 mt-2">
                {new Date(movie.release_date).toLocaleDateString()}
              </p>
              <div className="mt-2 flex justify-between items-center">
                <div>
                  <span className="text-yellow-500 text-lg">{movie.vote_average}</span>
                  <span className="text-gray-500 ml-2">({movie.vote_count} votes)</span>
                </div>
                <button className="py-2 px-4 rounded-2xl text-black bg-white hover:bg-blue-500 transition">
               Streaming
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-400">Your wishlist is empty.</p>
      )}
    </div>


  )
}

export default MovieWishList