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
import { useRouter } from "next/router";

export default function Item() {
  const { addToCart, getItemQuantity } = useCart();
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState<ItemTypes | null>(null);

  useEffect(() => {
    function fetchItem() {
      fetch(`/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => setItem(data));
    }
    fetchItem();
  }, [id]);

  if (item === null) return <div>Loading...</div>;

  const quantity = getItemQuantity(item.id);

  return (
    <>
      <div className="body-font overflow-hidden text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="mx-auto flex flex-wrap lg:w-4/5">
            <Image
              alt="ecommerce"
              width={200}
              height={240}
              className="h-60 w-full rounded object-cover object-center lg:h-auto lg:w-1/2"
              src={item.imgUrl}
            />
            <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
              <h2 className="inline-block rounded bg-indigo-100 px-2 py-1 text-xs font-medium tracking-widest text-indigo-600">
                {item.brand}
              </h2>
              <h1 className="title-font mb-1 flex text-3xl font-medium text-gray-900">
                {item.name}
                <span className="ml-3 flex space-x-3 border-l-2 border-gray-400 py-2 pl-3 text-xl">
                  <a className="cursor-pointer text-gray-500">
                    <FaFacebookF />
                  </a>
                  <a className="cursor-pointer text-gray-500">
                    <FaTwitter />
                  </a>
                  <a className="cursor-pointer text-gray-500">
                    <FaInstagram />
                  </a>
                </span>
              </h1>

              <div className="mb-4 flex">
                <span className="flex items-center space-x-1 text-2xl text-indigo-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                  <span className="ml-3 text-sm text-gray-600">4 Reviews</span>
                </span>
              </div>
              <p className="mb-5 font-light leading-relaxed">
                {item.description}
              </p>
              <div className="mb-5 flex">
                <span className="mr-3">Color</span>
                <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-indigo-500 focus:outline-none"></button>
              </div>
              <div className="flex">
                <span className="title-font text-2xl font-medium text-gray-900">
                  {formatCurrency(item.price)}
                </span>
                {quantity > 0 ? (
                  <button className="ml-auto mr-2 flex items-center rounded-lg bg-indigo-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    Added to cart
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => addToCart(item.id)}
                    className="ml-auto mr-2 flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <FaShoppingCart />
                    &nbsp;Add to Cart
                  </button>
                )}
                <button
                  data-tooltip-target="tooltip-right"
                  data-tooltip-placement="right"
                  className="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-200 p-0 text-gray-500">
                  <FaHeart />
                </button>
                <div
                  id="tooltip-right"
                  role="tooltip"
                  className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm">
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
