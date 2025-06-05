import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieSlider from './movieSlider/MovieSlider';
import Loader from './common/Loader';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

const features = [
  {
    title: 'Enjoy on your TV',
    description: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
    icon: '🖥️',
  },
  {
    title: 'Download your shows to watch offline',
    description: 'Save your favourites easily and always have something to watch.',
    icon: '⬇️',
  },
  {
    title: 'Watch everywhere',
    description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.',
    icon: '📡',
  },
  {
    title: 'Create profiles for kids',
    description: 'Send kids on adventures with their favourite characters in a space made just for them — free with your membership.',
    icon: '👶',
  },
];

function Header() {
  const [randomMovie, setRandomMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [logSign,setLogSign] = useState(false)

  const getRandom = async () => {
    try {
      const response = await axios.get(`https://jsonfakery.com/movies/random`);
      setRandomMovie(response.data);
      // console.log(response.data,"response.data")
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRandom();
  }, []);

  if (loading) return <Loader />;
  if (error)
    return (
      <div className="text-center py-10 text-red-600 font-semibold">
        ❌ Failed to load featured movie. Please try again later.
      </div>
    );

  return (
    <div className="py-1 space-y-2  text-white">
<div
  className="  md:flex justify-center items-center text-white "
  style={{
    backgroundImage: 'url("/images/banner.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '600px',
    width: '100%',
  }}
>
  <div className=" bg-opacity-60  py-4   rounded-xl   text-center md:max-w-2xl w-full">
    <h1 className="text-3xl sm:text-3xl md:text-5xl font-semibold tracking-widest md:mb-4 leading-snug">
      Welcome to <span className="text-yellow-400">MovieGalaxy</span>
    </h1>
    <p className="text-base  font-light px-2 sm:px-6">
      Your destination for cinematic magic ✨
    </p>
  </div>
   {/*login and Register Fields  */}
<div
  className="flex md:flex items-center justify-center md:min-h-screen bg-cover bg-center  sm:px-6 md:px-8"
  style={{ backgroundImage: "url('/your-background-image-path.jpg')" }}
>
  <div className="w-[300px]  md:w-[400px] md:h-[450px] bg-black bg-opacity-70 rounded-xl p-2 text-white shadow-xl">
    
    {/* Toggle Buttons */}
    <div className="flex justify-center space-x-4 mb-6">
      <button
        onClick={() => setLogSign(true)}
        className={`py-2 px-5 rounded-md transition duration-300 hover:bg-white hover:text-black font-semibold
          ${logSign ? 'bg-white text-black font-semibold' : 'bg-gray-700 text-white'}`}
      >
        SignUp
      </button>
      <button
        onClick={() => setLogSign(false)}
        className={`py-2 px-5 rounded-md transition duration-300  hover:bg-white hover:text-black font-semibold
          ${!logSign ? 'bg-white text-black font-semibold' : 'bg-gray-700 text-white'}`}
      >
        Register
      </button>
    </div>

    {/* Conditional Form */}
    {logSign ? <Login /> : <Register />}
  </div>
</div>


</div>

      {/* Hero Section */}
      <div className="h-screen container mx-auto rounded-2xl flex justify-between items-center  ">
        <div className="relative w-full h-full rounded-2xl   overflow-hidden">
          <img
            src={randomMovie.poster_path || '/placeholder.jpg'}
            alt={randomMovie.original_title || 'Movie'}
            className="object-cover w-full h-full rounded-2xl transition-all duration-500"
          />
          <div className="absolute inset-0  p-4 sm:p-6 md:p-10 lg:p-12 flex items-center">
            <div className="text-white w-full lg:w-1/2 space-y-6 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg">
                {randomMovie.original_title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg opacity-90">
                {randomMovie.overview}
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">  
                <span className="bg-blue-500/80 px-3 py-1 rounded-full text-sm">
                  {randomMovie.original_language?.toUpperCase()}
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
      <div className="container bg-transparent mx-auto px-4 sm:px-6 py-6">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">🔥 Trending Now</h2>
        <MovieSlider />
      </div>

      {/* Features Section */}
      <div className="container bg-transparent   mx-auto px-4 sm:px-6 py-6">
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            🌟 More Reasons to Join
          </h2>
          <div className=" text-white py-10 px-4">
            <div className="max-w-6xl bg-transparent mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
  );
}

export default Header;
