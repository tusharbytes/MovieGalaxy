import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { shoppingApi } from '../../../redux/features/shoppingSlice/ShoppingSlice'

function ShoppingProdoucts() {

  const shop = useSelector((state) => state.shop.items)
  console.log(shop)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(shoppingApi())
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {shop.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
        >
          <img
            src={item.product.image}
            alt={item.product.name}
            className="w-40 h-40 object-cover rounded-lg"
          />
          <h2 className="text-lg font-bold mt-2">{item.product.name}</h2>
          <p className="text-gray-600 text-sm">{item.product.description}</p>
          <p className="text-gray-800 font-semibold mt-2">
            Price: ${item.product.price}
          </p>
          <p className="text-gray-500">Category: {item.product.product_category.name}</p>
          <p className="text-gray-700">Quantity: {item.quantity}</p>
          <p className="text-gray-800 font-bold">Total: ${item.total_amount}</p>
        </div>
      ))}
    </div>
  )
}

export default ShoppingProdoucts
