import React, { useState } from 'react';
import { IoHeartSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { addToWish } from '../../../redux/features/addWishList/MovieWishListSlice';

function SingleMovieView() {
    const singleMovie = useSelector((state) => state.selectSingle.singleMovie);
    console.log(singleMovie, "okokok")
    const dispatch = useDispatch();
    const [addedToWish, setAddedToWish] = useState(false);

    const handleAddRemove = () => {
        if (singleMovie) {
            dispatch(addToWish(singleMovie));
            setAddedToWish((prev) => !prev);
        }
    };

    if (!singleMovie) {
        return <div className="h-screen flex items-center justify-center  ">Movie not found</div>;
    }

    return (
        <div className=" py-3 flex items-center justify-center  bg-gray-100">
            {singleMovie?.poster_path && (
                <div className="container mx-auto bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                    {/* Left Section - Movie Image */}
                    <div className="flex-shrink-0">
                        <img
                            src={`https://image.tmdb.org/t/p/original/${singleMovie?.poster_path}`}
                            alt={singleMovie?.original_title}
                            className="  md:w-[500px]  object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right Section - Movie Details */}
                    <div className="flex-1 text-gray-900">
                        <h3 className="text-3xl font-semibold mb-4 text-center md:text-left">{singleMovie?.original_title}</h3>
                        <p className="text-gray-500 text-sm md:text-base line-clamp-5 mb-4">{singleMovie?.overview}</p>
                        <p className="text-gray-500 text-base">
                            Release Date: {singleMovie?.release_date ? new Date(singleMovie?.release_date).toLocaleDateString() : 'N/A'}
                        </p>

                        <div className="mt-4 flex justify-center md:justify-start items-center space-x-4">
                            <span className="text-yellow-500 text-2xl">{singleMovie?.vote_average}</span>
                            <span className="text-gray-600 text-sm">({singleMovie?.vote_count} votes)</span>
                        </div>

                        {/* Wishlist Button */}
                        <div className="mt-6 flex justify-center md:justify-start">
                            <button
                                onClick={handleAddRemove}
                                className="py-3 px-8 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300">
                                {addedToWish ? "Remove from Wishlist" : "Add to Wishlist"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Product Details Section */}
            {singleMovie?.product && (
                <div className="container mx-auto bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 mt-8">
                    <div className='flex-shrink-0'>  <img
                        src={singleMovie?.product?.image}
                        alt={singleMovie?.product?.name}
                        className="w-[300px] md:w-[500px] h-auto object-cover rounded-lg shadow-lg"
                    />
                    </div>
                    <div className="flex-1 text-gray-900">
                        <h3 className="text-3xl font-semibold mb-4 text-center md:text-left">{singleMovie?.product?.name}</h3>

                        <p className="text-gray-500 text-sm md:text-base line-clamp-5 mb-4">{singleMovie?.product?.description}</p>
                        <p className="text-gray-800 font-semibold">Price: ${singleMovie?.product?.price}</p>
                        <p className="text-gray-600">Category: {singleMovie?.product?.product_category?.name}</p>
                        <p className="text-gray-600">Quantity: {singleMovie?.quantity}</p>
                        <p className="text-gray-900 font-semibold mt-4">Total Amount: ${singleMovie?.total_amount}</p>
                        <div className="mt-6 flex justify-center md:justify-start">
                            <button
                                onClick={handleAddRemove}
                                className="py-3 px-8 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300">
                                {addedToWish ? "Remove from Wishlist" : "Add to Wishlist"}
                            </button>
                        </div>   </div>

                </div>
            )}
        </div>


    );
}

export default SingleMovieView;
