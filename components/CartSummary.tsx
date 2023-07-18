import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { ItemTypes } from "../types/StoreTypes";
import formatCurrency from "../utils/formatCurrency";

export default function CartSummary() {
  const { cartQuantity, cartItems } = useCart();

  const [items, setItems] = useState<ItemTypes[]>([]);

  useEffect(() => {
    function fetchItems() {
      fetch("/api/products")
        .then((res) => res.json())
        .then((data) => setItems(data));
    }
    fetchItems();
  }, []);

  return (
    <>
      <div id="summary" className="w-1/3 px-8">
        <h1 className="border-b border-gray-400 pb-2 text-lg font-semibold">
          Order Summary
        </h1>
        <div className="mt-5 flex justify-between">
          <span className="text-sm font-semibold uppercase">Items</span>
          <button className="font-sm rounded-full bg-blue-700 px-2.5 py-1 text-center text-sm text-white hover:bg-blue-800">
            {cartQuantity}
          </button>
        </div>
        <div className="py-5">
          <label
            htmlFor="promo"
            className="mb-3 inline-block text-sm font-semibold uppercase">
            Promo Code
          </label>
          <input
            type="text"
            id="promo"
            placeholder="Enter your code"
            className="block w-full border border-gray-400 bg-transparent p-2 text-sm text-gray-800 focus:border-blue-600 focus:outline-none"
          />
        </div>
        <button className="bg-red-500 px-5 py-2 text-sm uppercase text-white hover:bg-red-600">
          Apply
        </button>
        <div className="mt-4 border-t border-gray-400">
          <div className="flex justify-between py-6 text-sm font-semibold uppercase">
            <span>Subtotal</span>
            <span>
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = items.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </span>
          </div>
          <button className="w-full rounded-sm bg-indigo-500 py-3 text-sm font-semibold uppercase text-gray-100 hover:bg-indigo-600">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
