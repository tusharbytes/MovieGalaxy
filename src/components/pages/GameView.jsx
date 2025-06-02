import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../common/Loader'

function GameView() {

    const [game, setGame] = useState([])
    const [loading , setLoading]= useState(false)

    const fetchGame = async () => {
        const response = await axios.get(`https://jsonfakery.com/games/paginated`)
    
         if(response.data.data){
        
           setGame(response.data.data)
           setLoading(false)
        } 
       
       

    }

    useEffect(() => {
         setLoading(true) 
        fetchGame()
    }, [])


    return (
        <div className="w-full p-4">
          { loading  && <Loader/>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {game.map((game) => (
        <div key={game.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl">
               <img
                        src={game.screenshots[0]?.image_url} // assuming the first screenshot is used as the background
                        alt={game.name}
                        className="object-contain  opacity-80"
                    />
          <h3 className="text-xl font-semibold text-gray-800">{game.name}</h3>
          <p className="text-lg text-gray-600 mt-2">{game.price}</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
      </div>
      

    )
}

export default GameView