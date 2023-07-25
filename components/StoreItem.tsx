import Link from "next/link";
import Image from "next/image";
import formatCurrency from "../utils/formatCurrency";
import { Product } from "@/types/ProductTypes";

export default function StoreItem({ id, name, brand, price, imgUrl }: Product) {
  return (
    <>
      <Link
        className="relative block h-48 cursor-pointer overflow-hidden rounded"
        href={`/products/${id}`}>
        <Image
          alt="ecommerce"
          width={192}
          height={192}
          className="block h-full w-full object-cover object-center"
          src={imgUrl}
        />
      </Link>
      <div className="mt-4">
        <h3 className="inline-block rounded bg-indigo-100 px-2 py-1 text-xs font-medium tracking-widest text-indigo-600">
          {brand}
        </h3>
        <h2 className="title-font font-mono text-lg font-medium tracking-tight text-gray-900">
          {name}
        </h2>
        <p className="mt-1 font-normal">{formatCurrency(price)}</p>
      </div>
    </>
  );
}
