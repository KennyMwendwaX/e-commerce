import {
  HiOutlineMinus,
  HiOutlinePlus,
  HiOutlineArrowLeft,
} from "react-icons/hi"
import { useState } from "react"
import { useCart } from "../context/CartContext"

export default function CartComponent() {
  const [cartCount, setCartCount] = useState(1)
  const increment = () => {
    if (cartCount >= 10) {
      setCartCount(10)
    } else {
      setCartCount(cartCount + 1)
    }
  }

  const decrement = () => {
    if (cartCount <= 1) {
      setCartCount(1)
    } else {
      setCartCount(cartCount - 1)
    }
  }
  return (
    <div className="relative overflow-x-auto rounded-lg">
      <div className="flex">
        <table className="w-2/3 text-sm text-left text-gray-500">
          <thead className="text-sm text-gray-900 uppercase border-b border-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-transparent">
            <tr className="border-b border-gray-400">
              <td className="w-32 p-4">
                <img src="/gkmc.webp" alt="Apple Watch" />
              </td>
              <td className="px-6 py-4 font-semibold text-gray-700">
                Apple Watch
              </td>
              <td className="px-6 py-4">
                <div className="inline-flex bg-transparent border border-gray-600 items-center font-light">
                  <span className="sr-only">Quantity button</span>
                  <button
                    onClick={decrement}
                    className="text-gray-900 bg-transparent focus:outline-none font-medium text-sm px-5 py-2.5">
                    <HiOutlineMinus />
                  </button>
                  <button className="text-gray-900 bg-transparent focus:outline-none font-medium text-sm px-5 py-2.5">
                    {cartCount}
                  </button>
                  <button
                    onClick={increment}
                    className="text-gray-900 bg-transparent focus:outline-none font-medium text-sm px-5 py-2.5">
                    <HiOutlinePlus />
                  </button>
                </div>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900">$599</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline">
                  Remove
                </a>
              </td>
            </tr>
            <tr className="border-b border-gray-400">
              <td className="w-32 p-4">
                <img src="/gkmc.webp" alt="Apple Watch" />
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900">
                Apple Watch
              </td>
              <td className="px-6 py-4">
                <div className="inline-flex bg-transparent border border-gray-600 items-center font-light">
                  <span className="sr-only">Quantity button</span>
                  <button
                    onClick={decrement}
                    className="text-gray-900 bg-transparent focus:outline-none font-medium text-sm px-5 py-2.5">
                    <HiOutlineMinus />
                  </button>
                  <button className="text-gray-700 bg-transparent focus:outline-none font-medium text-sm px-5 py-2.5">
                    {cartCount}
                  </button>
                  <button
                    onClick={increment}
                    className="text-gray-900 bg-transparent focus:outline-none font-medium text-sm px-5 py-2.5">
                    <HiOutlinePlus />
                  </button>
                </div>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 ">$599</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline">
                  Remove
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div id="summary" className="w-1/3 px-8">
          <h1 className="font-semibold text-xl border-b border-gray-400 pb-4">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items</span>
            <span className="font-semibold text-sm">3</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div className="py-10">
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
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Subtotal</span>
              <span>$600</span>
            </div>
            <button className="bg-indigo-500 rounded-sm font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-between items-center mt-4">
        <button
          type="button"
          className="items-center inline-flex py-2.5 px-5 mb-2 text-base font-medium text-blue-700 bg-transparent rounded-sm hover:bg-gray-100 hover:text-blue-700">
          <HiOutlineArrowLeft />
          &nbsp; Continue Shopping
        </button>
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-5 py-2.5 mb-2">
          Proceed to Checkout
        </button>
      </div> */}
    </div>
  )
}
