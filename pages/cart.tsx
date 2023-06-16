import Link from "next/link";
import CartComponent from "../components/CartComponent";
import CartSummary from "../components/CartSummary";
import { useCart } from "../context/CartContext";
import { FaArrowLeft } from "react-icons/fa";

export default function Cart() {
  const { cartQuantity } = useCart();

  return (
    <div className="container mx-auto px-5 py-20">
      {cartQuantity > 0 ? (
        <>
          <div className="text-xl font-medium">My Cart</div>
          <div className="flex-basis flex">
            <CartComponent />
            <CartSummary />
          </div>
        </>
      ) : (
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <div className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              No items in the cart
            </div>
            <div className="mb-4 font-mono text-lg font-light text-gray-500">
              Please add items to the cart. You&apos;ll find lots of products to
              explore on the home page.
            </div>
            <Link
              href="/"
              className="my-4 inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
              <FaArrowLeft /> &nbsp; Back to Homepage
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
