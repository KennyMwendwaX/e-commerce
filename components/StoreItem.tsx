import Link from "next/link";
import Image from "next/image";
import formatCurrency from "../utils/formatCurrency";
import { ItemTypes } from "../types/StoreTypes";

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
        href={`/products/${id}`}>
        <Image
          alt="ecommerce"
          width={192}
          height={192}
          className="object-cover object-center w-full h-full block"
          src={imgUrl}
        />
      </Link>
      <div className="mt-4">
        <h3 className="inline-block py-1 px-2 rounded bg-indigo-100 text-indigo-600 text-xs font-medium tracking-widest">
          {brand}
        </h3>
        <h2 className="text-gray-900 title-font text-lg tracking-tight font-mono font-medium">
          {name}
        </h2>
        <p className="mt-1 font-normal">{formatCurrency(price)}</p>
      </div>
    </>
  );
}
