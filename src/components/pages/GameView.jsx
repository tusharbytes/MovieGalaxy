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
     <div className=" px-2 bg-[#1A565A] py-8">
     
      {loading && <Loader />}

      <div className="container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

  {game.map((game) => (
    <div
      key={game.id}
      className="  rounded-xl   "
    >
      <img
        src={game.screenshots[0]?.image_url}
        alt={game.name}
        className="w-full h-48 object-cover rounded-xl"
        loading="lazy"
      />

      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-lg font-semibold text-white">{game.name}</h3>
          <p className="text-gray-600 mt-1">{game.price}</p>
        </div>
 
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default GameView;
