import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from '../common/Loader';

function GameView() {
  const [game, setGame] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchGame = async () => {
    try {
      const response = await axios.get(`https://jsonfakery.com/games/paginated`);
      if (response.data.data) {
        setGame(response.data.data);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching games:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchGame();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {loading && <Loader />}

      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800 font-serif">
          🎮 Top Trending Games
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {game.map((game) => (
            <div
              key={game.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={game.screenshots[0]?.image_url}
                alt={game.name}
                className="w-full h-56 object-cover rounded-t-xl"
              />

              <div className="p-4 flex flex-col justify-between h-full">
                <h3 className="text-lg font-semibold text-gray-800">{game.name}</h3>
                <p className="text-gray-600 mt-1">{game.price}</p>

                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-full shadow-sm transition duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameView;
