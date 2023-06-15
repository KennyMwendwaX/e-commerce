import {
  FaShoppingCart,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaHeart,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { ItemTypes } from "@/types/StoreTypes";
import formatCurrency from "@/utils/formatCurrency";

export default function Item() {
  const { addToCart, getItemQuantity } = useCart();
  // const { id } = useParams<{ id: string }>()
  const [item, setItem] = useState<ItemTypes | null>(null);

  // useEffect(() => {
  //   function fetchItem() {
  //     fetch(`http://localhost:8000/items/${id}`)
  //       .then((res) => res.json())
  //       .then((data) => setItem(data))
  //   }
  //   fetchItem()
  // }, [id])

  if (item === null) return <div>Loading...</div>;

  const quantity = getItemQuantity(item.id);

  return (
    <>
      <div className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={item.imgUrl}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="inline-block py-1 px-2 rounded bg-indigo-100 text-indigo-600 text-xs font-medium tracking-widest dark:bg-gray-700 dark:text-indigo-500">
                {item.brand}
              </h2>
              <h1 className="flex text-gray-900 text-3xl title-font font-medium mb-1 dark:text-gray-200">
                {item.name}
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
              <p className="leading-relaxed font-light mb-5 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                est voluptatum sit culpa itaque, libero, ducimus doloribus
                aliquid beatae perferendis velit commodi mollitia quis odit
                pariatur praesentium natus dignissimos eos totam reiciendis
                asperiores veniam possimus id dolorem! Odio doloremque veniam
                rerum mollitia a assumenda commodi natus laboriosam obcaecati,
                iste accusamus!
              </p>
              <div className="flex mb-5 dark:text-gray-300">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900 dark:text-gray-400">
                  {formatCurrency(item.price)}
                </span>
                {quantity > 0 ? (
                  <button className="flex ml-auto text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-2">
                    Added to cart
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => addToCart(item.id)}
                    className="flex ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-2">
                    <FaShoppingCart />
                    &nbsp;Add to Cart
                  </button>
                )}
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
  );
}
