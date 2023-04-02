import { Link } from "react-router-dom"
import formatCurrency from "../utils/formatCurrency"
import { ItemTypes } from "../types/StoreTypes"

export default function StoreItem({
  id,
  name,
  brand,
  price,
  imgUrl,
}: ItemTypes) {
  return (
    <>
      <Link
        className="block relative h-48 rounded overflow-hidden cursor-pointer"
        to={`/products/${id}`}>
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={imgUrl}
        />
      </Link>
      <div className="mt-4">
        <h3 className="inline-block py-1 px-2 rounded bg-indigo-100 text-indigo-600 text-xs font-medium tracking-widest dark:bg-gray-700 dark:text-blue-500">
          {brand}
        </h3>
        <h2 className="text-gray-900 title-font text-lg tracking-tight font-mono font-medium dark:text-gray-200">
          {name}
        </h2>
        <p className="mt-1 font-normal dark:text-gray-300">
          {formatCurrency(price)}
        </p>
      </div>
    </>
  )
}
