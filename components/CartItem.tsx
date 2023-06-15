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
      fetch(`http://localhost:8000/items/${id}`)
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
            <Image src={item.imgUrl} alt="Apple Watch" />
          </Link>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-300">
          {item.name}
        </td>
        <td className="px-6 py-4">
          <div className="inline-flex bg-transparent border border-gray-200 items-center font-light">
            <span className="sr-only">Quantity button</span>
            <button
              onClick={() => decreaseCartQuantity(id)}
              className="text-gray-900 bg-transparent focus:outline-none font-medium text-sm px-5 py-2.5 dark:text-gray-300">
              <HiOutlineMinus />
            </button>
            <button className="text-gray-900 bg-transparent focus:outline-none font-medium text-sm px-5 py-2.5 dark:text-gray-300">
              {quantity}
            </button>
            <button
              onClick={() => increaseCartQuantity(id)}
              className="text-gray-900 bg-transparent focus:outline-none font-medium text-sm px-5 py-2.5 dark:text-gray-300">
              <HiOutlinePlus />
            </button>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-gray-300">
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
