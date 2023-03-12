import CartComponent from "../components/CartComponent"
import CartSummary from "../components/CartSummary"
import { useCart } from "../context/CartContext"
import { HiOutlineArrowLeft } from "react-icons/hi"
import { Link } from "react-router-dom"

export default function Cart() {
  const { cartQuantity } = useCart()

  return (
    <div className="container px-5 py-20 pb-5 bg-gray-50 mx-auto">
      {cartQuantity > 0 ? (
        <>
          <h1 className="font-medium">My Cart</h1>
          <div className="flex flex-basis">
            <CartComponent />
            <CartSummary />
          </div>
        </>
      ) : (
        <div className="items-center">
          No items in the cart
          <Link
            to="/"
            className="bg-blue-50 text-blue-600 inline-flex items-center ml-1">
            <HiOutlineArrowLeft />
            Back to Shopping
          </Link>
        </div>
      )}
    </div>
  )
}
