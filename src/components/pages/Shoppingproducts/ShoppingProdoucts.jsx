import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shoppingApi } from '../../../redux/features/shoppingSlice/ShoppingSlice';
import { Link } from 'react-router-dom';
import { singleMovieSelect } from '../../../redux/features/singleViewMovie/SingleMovieSlice';
import Loader from '../../common/Loader';
import { addToWish } from '../../../redux/features/addWishList/MovieWishListSlice';
import { addToProductWish } from '../../../redux/features/productWishList/ProductWishList';
import { ToastContainer } from 'react-toastify';

function ShoppingProducts() {
  const dispatch = useDispatch();
  const shop = useSelector((state) => state.shop);
  const CheckWishList = useSelector((state) => state.addProduct.items);
  console.log(CheckWishList,"sadsadas")

  

  const handleSingleView = (item) => {
    dispatch(singleMovieSelect(item));
  };

  useEffect(() => {
    dispatch(shoppingApi());
  }, [dispatch]);

  const handleAddRemove =(item)=>{
    dispatch(addToProductWish(item))
  }

  if (shop.loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 font-serif mb-10">
        🛍️ Explore Shopping Products
      </h1>

      <div className="container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {shop.items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden p-5 flex flex-col"
          >
            <Link
              to={`/singlemovie/${item.id}`}
              onClick={() => handleSingleView(item)}
              className="block mb-4"
            >
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-full h-56 object-cover rounded-lg"
              />
            </Link>

            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              {item.product.name}
            </h2>
            <p className="text-sm text-gray-500 mb-3 text-center">
              {item.product.description}
            </p>

            <div className="text-sm text-gray-700 space-y-1 flex-grow">
              <p>
                <span className="font-semibold">Price:</span> ${item.product.price}
              </p>
              <p>
                <span className="font-semibold">Category:</span> {item.product.product_category.name}
              </p>
              <p>
                <span className="font-semibold">Quantity:</span> {item.quantity}
              </p>
              <p className="text-indigo-600 font-bold text-base mt-2">
                Total: ${item.total_amount}
              </p>
            </div>

            <button onClick={()=>handleAddRemove(item)} className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition text-sm">
            {CheckWishList.some((product)=>(product.id === item.id)) ? "Remove cart" :"Add To Cart"} 
            </button>
          </div>
        ))}
      </div>
      <ToastContainer/>
    </div>
  );
}

export default ShoppingProducts;
