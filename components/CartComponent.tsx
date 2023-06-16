import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

export default function CartComponent() {
  const { cartItems } = useCart();
  return (
    <div className="w-2/3">
      <table className="text-left text-sm text-gray-500">
        <thead className="border-b border-gray-400 text-sm text-gray-900">
          <tr>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Image</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
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
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
