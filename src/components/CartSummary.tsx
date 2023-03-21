import { useEffect, useState } from "react"
import { useCart } from "../context/CartContext"
import { ItemTypes } from "../types/StoreTypes"
import formatCurrency from "../utils/formatCurrency"

export default function CartSummary() {
  const { cartQuantity, cartItems } = useCart()

  const [items, setItems] = useState<ItemTypes[]>([])

  useEffect(() => {
    function fetchItems() {
      fetch("http://localhost:8000/items")
        .then((res) => res.json())
        .then((data) => setItems(data))
    }
    fetchItems()
  }, [])

  return (
    <>
      <div id="summary" className="w-1/3 px-8">
        <h1 className="font-semibold text-lg border-b border-gray-400 pb-2">
          Order Summary
        </h1>
        <div className="flex justify-between mt-5">
          <span className="font-semibold text-sm uppercase">Items</span>
          <button className="text-white bg-blue-700 hover:bg-blue-800 font-sm rounded-full text-sm px-2.5 py-1 text-center">
            {cartQuantity}
          </button>
        </div>
        <div className="py-5">
          <label
            htmlFor="promo"
            className="font-semibold inline-block mb-3 text-sm uppercase">
            Promo Code
          </label>
          <input
            type="text"
            id="promo"
            placeholder="Enter your code"
            className="block w-full p-2 text-sm text-gray-800 border border-gray-400 focus:outline-none focus:border-blue-600 bg-transparent"
          />
        </div>
        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
          Apply
        </button>
        <div className="border-t border-gray-400 mt-4">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Subtotal</span>
            <span>
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = items.find((i) => i.id === cartItem.id)
                  return total + (item?.price || 0) * cartItem.quantity
                }, 0)
              )}
            </span>
          </div>
          <button className="bg-indigo-500 rounded-sm font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
            Checkout
          </button>
        </div>
      </div>
    </>
  )
}
