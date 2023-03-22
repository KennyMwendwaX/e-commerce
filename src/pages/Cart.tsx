import CartComponent from "../components/CartComponent"
import CartSummary from "../components/CartSummary"
import { useCart } from "../context/CartContext"
import { FaArrowLeft } from "react-icons/fa"

export default function Cart() {
  const { cartQuantity } = useCart()

  return (
    <div className="container px-5 py-20 mx-auto">
      {cartQuantity > 0 ? (
        <>
          <h1 className="font-medium">My Cart</h1>
          <div className="flex flex-basis">
            <CartComponent />
            <CartSummary />
          </div>
        </>
      ) : (
        <div className="bg-gray-50">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <div className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
                No items in the cart
              </div>
              <div className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                Please add items to the cart. You'll find lots to explore on the
                home page.
              </div>
              <a
                href="/"
                className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">
                <FaArrowLeft /> &nbsp; Back to Homepage
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
