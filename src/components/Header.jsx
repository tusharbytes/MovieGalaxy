import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getMovies } from '../redux/features/MovieSlice/MovieSlice'
import MovieSlider from './movieSlider/MovieSlider'
import Footer from './Footer'

function Header() {
    const [randomMovie, setRandomMovie] = useState({})
    const [loading, setLoading] = useState(true)

    const getRandom = async () => {
        try {
            const response = await axios.get(`https://jsonfakery.com/movies/random`)
            setRandomMovie(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getRandom()
    }, [])

    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center    ">
                <p>Loading...</p>
            </div>
        )
    }

    return (
        <div className='py-4  '>
            <div className='h-screen container mx-auto rounded-2xl flex justify-between items-center py-4 px-6'>
                <div className="relative w-full h-full rounded-2xl">
                    <img
                        src={randomMovie.poster_path}
                        alt={randomMovie.original_title}
                        className="object-contain w-full h-full opacity-80 "
                    />
                    <div className="absolute inset-0 pl-5  bg-black bg-opacity-50">
                        <div className="flex items-center w-full h-full px-4">
                            <div className="lg:w-1/3 text-white text-center lg:text-left space-y-4">
                                <h1 className="text-5xl pl-5 font-bold">{randomMovie.original_title}</h1>
                                <p className="text-lg pl-5">{randomMovie.overview}</p>
                                <div className="space-x-4 pl-5 ">
                                    <span className="bg-blue-500   px-4 py-2 rounded-md">{randomMovie.original_language}</span>
                                    <span className="bg-gray-700   px-4 py-2 rounded-md">Rating: {randomMovie.vote_average}</span>
                                    <span className="bg-gray-700   px-4 py-2 rounded-md">Release Date: {randomMovie.release_date}</span>
                                </div>
                                <div className='pl-5 '>
                                    <button className="mt-6 px-6 py-3 pl-5  bg-green-600 rounded-md text-white hover:bg-green-700 transition duration-300">
                                        Watch Now
                                    </button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trending Section */}
            <div className="container mx-auto flex justify-between items-center py-4 px-6 p-6">

                <MovieSlider />
            </div>

            {/* More reasons to join section */}
            <div className='container mx-auto flex justify-between items-center py-4 px-6'>
                <div className=''>
                    <h2 className="text-2xl font-bold mb-4  "><span>More reasons to join</span></h2>
                    <img src="/images/join.jpg" alt="Join" className="w-full rounded-md shadow-lg" />
                </div>
            </div>

        </div>
    )
}

export default Header
