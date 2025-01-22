
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import movieSlice from './redux/features/MovieSlice/MovieSlice';
import movieAddSlice from "./redux/features/addWishList/MovieWishListSlice"
import singleMovieSlice from "./redux/features/singleViewMovie/SingleMovieSlice"
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';


const persistConfig = {
    key: 'root',
    storage,

};

const rootReducer = combineReducers({
    selectSingle: singleMovieSlice,
    fetchMovie: movieSlice,
    addListMovie: movieAddSlice,
    selectSingle: singleMovieSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer



});
const persistor = persistStore(store)

export { store, persistor }
