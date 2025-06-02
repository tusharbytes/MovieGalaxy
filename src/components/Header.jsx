import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getMovies } from '../redux/features/MovieSlice/MovieSlice'
import MovieSlider from './movieSlider/MovieSlider'
 import Loader from "./common/Loader"

const features =[
  {
    "title": "Enjoy on your TV",
    "description": "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    "icon": "🖥️"
  },
  {
    "title": "Download your shows to watch offline",
    "description": "Save your favourites easily and always have something to watch.",
    "icon": "⬇️"
  },
  {
    "title": "Watch everywhere",
    "description": "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
    "icon": "📡"
  },
  {
    "title": "Create profiles for kids",
    "description": "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
    "icon": "👶"
  }
]


function Header() {
    const [randomMovie, setRandomMovie] = useState({})
    const [loading, setLoading] = useState(true)

    const getRandom = async () => {
        try {
            const response = await axios.get(`https://jsonfakery.com/movies/random`)
            setRandomMovie(response.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    useEffect( () => {
        getRandom()
    }, [])

    if (loading) {
        return (
             <Loader/>
        )
    }

    return (
  <div className="py-4 space-y-12">
  {/* Hero Section */}
  <div className="h-screen container mx-auto rounded-2xl flex justify-between items-center py-4 px-6">
    <div className="relative w-full h-full rounded-2xl shadow-xl overflow-hidden">
      <img
        src={randomMovie.poster_path}
        alt={randomMovie.original_title}
        className="object- w-full h-full rounded-2xl  "
      />
      <div className="absolute inset-0 bg-black/60   p-4 sm:p-6 md:p-10 lg:p-12 flex items-center">
        <div className="text-white w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg">
            {randomMovie.original_title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg opacity-90">
            {randomMovie.overview}
          </p>
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            <span className="bg-blue-500/80 px-3 py-1 rounded-full text-sm">
              {randomMovie.original_language.toUpperCase()}
            </span>
            <span className="bg-gray-700/80 px-3 py-1 rounded-full text-sm">
              ⭐ {randomMovie.vote_average}
            </span>
            <span className="bg-gray-700/80 px-3 py-1 rounded-full text-sm">
              📅 {randomMovie.release_date}
            </span>
          </div>
          <button className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md shadow-md transition-all duration-300 hover:scale-105">
            🎬 Watch Now
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Trending Section */}
  <div className="container mx-auto px-4 sm:px-6 py-6">
    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">🔥 Trending Now</h2>
    <MovieSlider />
  </div>

  {/* More Reasons to Join Section */}
  <div className="container mx-auto px-4 sm:px-6 py-6">
    <div className="space-y-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
        🌟 More Reasons to Join
      </h2>
       <div className="bg-black text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#1f1c2c] to-[#928dab] p-6 rounded-xl shadow-lg flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-200">{feature.description}</p>
            </div>
            <div className="text-4xl mt-4 text-right">{feature.icon}</div>
          </div>
        ))}
      </div>
    </div>
    </div>
  </div>
</div>


    )
}

export default Header
