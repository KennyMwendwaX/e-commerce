import {
  FaShoppingCart,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaHeart,
  FaStar,
  FaRegStar,
} from "react-icons/fa"
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi"
import { useState } from "react"

export default function ProductPage2() {
  const [count, setCount] = useState(1)

  const increment = () => {
    if (count > 9) {
      setCount(10)
    } else {
      setCount(count + 1)
    }
  }

  const decrement = () => {
    if (count < 2) {
      setCount(1)
    } else {
      setCount(count - 1)
    }
  }
  return (
    <>
      <div className="bg-gray-50 text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="/air-jordan-1-retro-blue-400x400.jpg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="flex text-gray-900 text-3xl title-font font-medium mb-1">
                The Catcher in the Rye
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-400 space-x-3 text-xl">
                  <a className="text-gray-500 cursor-pointer">
                    <FaFacebookF />
                  </a>
                  <a className="text-gray-500 cursor-pointer">
                    <FaTwitter />
                  </a>
                  <a className="text-gray-500 cursor-pointer">
                    <FaInstagram />
                  </a>
                </span>
              </h1>

              <div className="flex mb-4">
                <span className="flex items-center text-indigo-500 text-2xl space-x-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                  <span className="text-gray-600 ml-3 text-sm">4 Reviews</span>
                </span>
              </div>
              <p className="leading-relaxed font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                atque facilis obcaecati, quia quasi, mollitia nostrum
                laudantium, ab culpa quisquam dicta maxime officiis sit qui
                possimus consequatur repellat praesentium! Distinctio ducimus
                illum, corrupti excepturi doloribus nobis esse minima, autem
                blanditiis quae commodi nam omnis fugiat et. Consequuntur
                repudiandae fuga tempore.
              </p>

              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex items-center">
                  <span className="mr-3 font-light">Quantity</span>
                  <div className="bg-gray-200 border border-gray-600 items-center font-light">
                    <button
                      onClick={decrement}
                      className="text-gray-900 bg-transparent border focus:outline-none font-medium text-sm px-5 py-2.5">
                      <HiOutlineMinus />
                    </button>
                    <button className="text-gray-700 bg-transparent border focus:outline-none font-medium text-sm px-5 py-2.5">
                      {count}
                    </button>
                    <button
                      onClick={increment}
                      className="text-gray-900 bg-transparent border focus:outline-none font-medium text-sm px-5 py-2.5">
                      <HiOutlinePlus />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span>
                <button
                  type="button"
                  className="flex ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <FaShoppingCart />
                  &nbsp;Add to Cart
                </button>
                <button
                  data-tooltip-target="tooltip-right"
                  data-tooltip-placement="right"
                  className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <FaHeart />
                </button>
                <div
                  id="tooltip-right"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                  Tooltip on right
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
