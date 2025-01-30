import { combineReducers, configureStore } from '@reduxjs/toolkit';
import movieSlice from '../features/MovieSlice/MovieSlice';
import movieAddSlice from "../features/addWishList/MovieWishListSlice";
import singleMovieSlice from "../features/singleViewMovie/SingleMovieSlice";
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import shoppingCart from "../features/shoppingSlice/ShoppingSlice";
import jobSlice from "../features/jobSlice/JobSlice";

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    selectSingle: singleMovieSlice,
    fetchMovie: movieSlice,
    addListMovie: movieAddSlice,
    jobsOffers: jobSlice,
    shop: shoppingCart,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
