import React from 'react'
import { IoHeartSharp } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToWish } from '../../../redux/features/addWishList/MovieWishListSlice'
import { RiDeleteBin6Line } from 'react-icons/ri'

function MovieWishList() {
  const wishList = useSelector((state) => state.addListMovie)
  const dispatch = useDispatch()

  const handleRemove = (movie) => {
    dispatch(addToWish(movie))
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">🎬 Your Wishlist</h1>

      {wishList.movieAdd && wishList.movieAdd.length > 0 ? (
        <div className="space-y-6 max-w-5xl mx-auto">
          {wishList.movieAdd.map((movie) => (
            <div
              key={movie.id}
              className="bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row"
            >
              {/* Movie Poster */}
              <Link to={`/singlemovie/${movie.id}`} className="md:w-1/3 w-full">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.original_title}
                  className="w-full h-[400px] object-cover"
                />
              </Link>

              {/* Movie Details */}
              <div className="p-6 flex flex-col justify-between md:w-2/3">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-2xl font-semibold text-gray-800">{movie.original_title}</h2>
                    <button
                      onClick={() => handleRemove(movie)}
                      className="text-red-600 hover:bg-red-100 p-2 rounded-full transition"
                      title="Remove from wishlist"
                    >
                      <RiDeleteBin6Line size={20} />
                    </button>
                  </div>

                  <p className="text-gray-600 line-clamp-4 text-sm">{movie.overview}</p>

                  <p className="text-sm text-gray-500 mt-3">
                    Release Date: {new Date(movie.release_date).toLocaleDateString()}
                  </p>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <div className="text-sm text-gray-700">
                    <span className="text-yellow-500 font-bold">{movie.vote_average}</span>
                    <span className="ml-1">({movie.vote_count} votes)</span>
                  </div>
                  <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-5 py-2 rounded-full transition">
                    Streaming
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[60vh]">
          <IoHeartSharp className="text-6xl text-gray-300 mb-4 animate-pulse" />
          <p className="text-xl text-gray-500">Your wishlist is empty...</p>
        </div>
      )}
    </div>
  )
}

export default MovieWishList
