import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getMovies } from '../redux/features/MovieSlice/MovieSlice'
import MovieSlider from './movieSlider/MovieSlider'


function Header() {



    const [randomMovie, setRandomMovie] = useState({})

    const getRandom = async () => {
        try {
            const response = await axios.get(`https://jsonfakery.com/movies/random`)
            setRandomMovie(response.data)
        } catch (error) {
            console.log(error)

        }
    }
    useEffect(() => {

        getRandom()
    }, [])

    return (
        <div className='  bg-gray-900'>
            <div className='h-screen container mx-auto flex justify-between items-center py-4 px-6  bg-gray-900 text-white'>
                <div className="relative w-full h-screen bg-gray-800">
                    <img
                        src={randomMovie.poster_path}
                        alt={randomMovie.original_title}
                        className="object-contain w-full h-full opacity-80"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50">
                        <div className="flex   items-center w-full h-full px-4">
                            <div className="lg:w-1/3 text-white text-center lg:text-left space-y-4">
                                <h1 className="text-5xl font-bold">{randomMovie.original_title}</h1>
                                <p className="text-lg">{randomMovie.overview}</p>
                                <div className="space-x-4">
                                    <span className="bg-blue-500 px-4 py-2 rounded-md">{randomMovie.original_language}</span>
                                    <span className="bg-gray-700 px-4 py-2 rounded-md">Rating: {randomMovie.vote_average}</span>
                                    <span className="bg-gray-700 px-4 py-2 rounded-md">Release Date: {randomMovie.release_date}</span>
                                </div>
                                <button className="mt-6 px-6 py-3 bg-green-600 rounded-md text-white hover:bg-green-700 transition duration-300">
                                    Watch Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 text-white p-6">

                <h2 className="text-2xl   font-bold mb-4  "> <span className='  px-2 py-2 rounded-xl '>Trending Now</span></h2>
                <MovieSlider />
            </div>

            <div className='flex bg-gray-900 text-white p-6'>
                <div className=''>
                    <h2 className="text-2xl   font-bold mb-4  "><span>More reasons to join</span></h2>
                    <img src="/images/join.jpg" alt="" /></div>
            </div>


        </div>
    )
}

export default Header