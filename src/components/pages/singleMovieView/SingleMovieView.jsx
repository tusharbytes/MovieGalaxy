import React, { useState } from 'react';
import { IoHeartSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { addToWish } from '../../../redux/features/addWishList/MovieWishListSlice';

function SingleMovieView() {
    const singleMovie = useSelector((state) => state.selectSingle.singleMovie);
    const dispatch = useDispatch();
    const [addedToWish, setAddedToWish] = useState(false);

    const handleAddRemove = () => {
        if (singleMovie) {
            dispatch(addToWish(singleMovie));
            setAddedToWish((prev) => !prev);
        }
    };

    if (!singleMovie) {
        return <div className="h-screen flex items-center justify-center text-white">Movie not found</div>;
    }

    return (
        <div className="h-screen   flex items-center justify-center">
            <div className="container mx-auto   rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                {/* Left Section - Image */}
                <div className="flex-shrink-0">
                    <img
                        src={`https://image.tmdb.org/t/p/original/${singleMovie.poster_path}`}
                        alt={singleMovie.original_title}
                        className="w-[500px] h-auto object-contain rounded-lg shadow-md"
                    />
                </div>

                {/* Right Section - Details */}
                <div className="flex-1 text-white">
                    <h3 className="text-2xl font-bold mb-4">{singleMovie.original_title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-3">{singleMovie.overview}</p>
                    <p className="text-gray-500 mt-4">
                        Release Date: {new Date(singleMovie.release_date).toLocaleDateString()}
                    </p>
                    <div className="mt-4 flex items-center space-x-4">
                        <span className="text-yellow-500 text-xl">{singleMovie.vote_average}</span>
                        <span className="text-gray-500 text-sm">({singleMovie.vote_count} votes)</span>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex items-center space-x-4">
                  
                        <button 
                            onClick={handleAddRemove} 
                            className="py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                            {addedToWish ? "Remove from Wishlist" : "Add to Wishlist"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleMovieView;
