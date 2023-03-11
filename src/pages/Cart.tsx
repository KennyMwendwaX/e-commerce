import CartComponent from "../components/CartComponent"
import CartSummary from "../components/CartSummary"
import { useCart } from "../context/CartContext"

export default function Cart() {
  const { cartQuantity } = useCart()

  return (
    <div className="container px-5 py-20 pb-5 mx-auto">
      <h1 className="font-light">Cart {cartQuantity}</h1>
      <div className="overflow-x-auto rounded-sm">
        <div className="flex">
          <CartComponent />
          <CartSummary />
        </div>
      </div>
    </div>
  )
}
