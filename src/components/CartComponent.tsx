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
      <table className="w-2/3 text-sm text-left text-gray-500 ">
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
              <a href="#" className="font-medium text-red-600 hover:underline">
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
              <a href="#" className="font-medium text-red-600 hover:underline">
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
                <button className="text-gray-900 bg-transparent focus:outline-none font-medium text-sm px-5 py-2.5">
                  <HiOutlineMinus />
                </button>
                <button className="text-gray-700 bg-transparent focus:outline-none font-medium text-sm px-5 py-2.5">
                  12
                </button>
                <button className="text-gray-900 bg-transparent focus:outline-none font-medium text-sm px-5 py-2.5">
                  <HiOutlinePlus />
                </button>
              </div>
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 ">$599</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-red-600 hover:underline">
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
                <button className="text-gray-900 bg-transparent focus:outline-none font-medium text-sm px-5 py-2.5">
                  <HiOutlineMinus />
                </button>
                <button className="text-gray-700 bg-transparent focus:outline-none font-medium text-sm px-5 py-2.5">
                  12
                </button>
                <button className="text-gray-900 bg-transparent focus:outline-none font-medium text-sm px-5 py-2.5">
                  <HiOutlinePlus />
                </button>
              </div>
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 ">$599</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-red-600 hover:underline">
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
                <button className="text-gray-900 bg-transparent focus:outline-none font-medium text-sm px-5 py-2.5">
                  <HiOutlineMinus />
                </button>
                <button className="text-gray-700 bg-transparent focus:outline-none font-medium text-sm px-5 py-2.5">
                  12
                </button>
                <button className="text-gray-900 bg-transparent focus:outline-none font-medium text-sm px-5 py-2.5">
                  <HiOutlinePlus />
                </button>
              </div>
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 ">$599</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-red-600 hover:underline">
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
                <button className="text-gray-900 bg-transparent focus:outline-none font-medium text-sm px-5 py-2.5">
                  <HiOutlineMinus />
                </button>
                <button className="text-gray-700 bg-transparent focus:outline-none font-medium text-sm px-5 py-2.5">
                  12
                </button>
                <button className="text-gray-900 bg-transparent focus:outline-none font-medium text-sm px-5 py-2.5">
                  <HiOutlinePlus />
                </button>
              </div>
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 ">$599</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-red-600 hover:underline">
                Remove
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
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
      </div>
    </div>
  )
}
