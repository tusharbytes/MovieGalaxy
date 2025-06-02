import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MoviesView from './components/pages/MoviesView';
import GameView from './components/pages/GameView';
import MovieWishList from './components/pages/movieWishList/MovieWishList';
import SingleMovieView from './components/pages/singleMovieView/SingleMovieView';
import ShoppingProdoucts from './components/pages/Shoppingproducts/ShoppingProdoucts';
import Jobs from './components/pages/jobs/Jobs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Header />}> </Route>
        <Route path='/games' element={<GameView />}></Route>
        <Route path='/wishlist' element={<MovieWishList />}></Route>

        <Route path='/shopping' element={<ShoppingProdoucts />}></Route>
        <Route path='/jobs' element={<Jobs />}></Route>


        <Route path='/movies' element={<MoviesView />}></Route>
        <Route path='/singlemovie/:id' element={<SingleMovieView />}></Route>


      </Routes>
      <Footer/>
    </>
  );
}

export default App;
