import { useEffect, useState } from "react";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import { useCart } from "../context/CartContext";
import { ItemTypes } from "../types/StoreTypes";
import formatCurrency from "../utils/formatCurrency";
import Image from "next/image";
import Link from "next/link";

type CartItemProps = {
  id: string;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
  const { decreaseCartQuantity, increaseCartQuantity, removeFromCart } =
    useCart();

  const [item, setItem] = useState<ItemTypes | null>(null);

  useEffect(() => {
    function fetchItems() {
      fetch(`http://localhost:3000/api/items/${id}`)
        .then((res) => res.json())
        .then((data) => setItem(data));
    }
    fetchItems();
  }, [id]);

  if (item == null) return null;

  return (
    <>
      <tr className="border-b border-gray-400">
        <td className="w-32 p-4">
          <Link href={`/products/${id}`}>
            <Image
              width={128}
              height={128}
              src={item.imgUrl}
              alt="Apple Watch"
            />
          </Link>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-700">{item.name}</td>
        <td className="px-6 py-4">
          <div className="inline-flex items-center border border-gray-200 bg-transparent font-light">
            <span className="sr-only">Quantity button</span>
            <button
              onClick={() => decreaseCartQuantity(id)}
              className="bg-transparent px-5 py-2.5 text-sm font-medium text-gray-900 focus:outline-none">
              <HiOutlineMinus />
            </button>
            <button className="bg-transparent px-5 py-2.5 text-sm font-medium text-gray-900 focus:outline-none">
              {quantity}
            </button>
            <button
              onClick={() => increaseCartQuantity(id)}
              className="bg-transparent px-5 py-2.5 text-sm font-medium text-gray-900 focus:outline-none">
              <HiOutlinePlus />
            </button>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900">
          {formatCurrency(item.price * quantity)}
        </td>
        <td className="px-6 py-4">
          <button
            onClick={() => removeFromCart(id)}
            className="font-medium text-red-600 hover:underline">
            Remove
          </button>
        </td>
      </tr>
    </>
  );
}
