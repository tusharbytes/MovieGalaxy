import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MoviesView from './components/pages/MoviesView';
import GameView from './components/pages/GameView';
import MovieWishList from './components/pages/movieWishList/MovieWishList';
import SingleMovieView from './components/pages/singleMovieView/SingleMovieView';

function App() {
  return (
    < >
      <Navbar />
      <Routes>
        <Route path='/' element={<Header />}></Route>
        <Route path='/games' element={<GameView />}></Route>

        <Route path='/movies' element={<MoviesView />}></Route>
        <Route path='/singlemovie/:id' element={<SingleMovieView />}></Route>


      </Routes>
    </ >
  );
}

export default App;
