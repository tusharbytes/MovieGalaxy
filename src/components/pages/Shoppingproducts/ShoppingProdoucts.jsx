import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { shoppingApi } from '../../../redux/features/shoppingSlice/ShoppingSlice'
import { Link } from 'react-router-dom'
import { singleMovieSelect } from '../../../redux/features/singleViewMovie/SingleMovieSlice'
import Loader from '../../common/Loader'

function ShoppingProdoucts() {
  const dispatch = useDispatch()
  const shop = useSelector((state) => state.shop)

  const handleSingleView = (item) => {
    dispatch(singleMovieSelect(item))
  }

  useEffect(() => {
    dispatch(shoppingApi())
  }, [dispatch])

  if (shop.loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Shopping Products</h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto">
        {shop.items.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden p-4 flex flex-col items-center"
          >
            <Link
              to={`/singlemovie/${item.id}`}
              onClick={() => handleSingleView(item)}
              className="w-full"
            >
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-full h-[250px] object-cover rounded-lg mb-4"
              />
            </Link>

            <h2 className="text-xl font-semibold mb-1 text-center">{item.product.name}</h2>
            <p className="text-gray-600 text-sm mb-2 text-center">{item.product.description}</p>
            <div className="text-sm text-gray-700 w-full space-y-1">
              <p><span className="font-semibold">Price:</span> ${item.product.price}</p>
              <p><span className="font-semibold">Category:</span> {item.product.product_category.name}</p>
              <p><span className="font-semibold">Quantity:</span> {item.quantity}</p>
              <p className="text-lg font-bold text-indigo-600">
                Total: ${item.total_amount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShoppingProdoucts
