import CartComponent from "../components/CartComponent"
import { useCart } from "../context/CartContext"

export default function Cart() {
  const { cartItems, cartQuantity } = useCart()

  return (
    <div className="container px-5 py-20 pb-5 mx-auto">
      <h1 className="font-light">Cart {cartQuantity}</h1>
      <CartComponent />
    </div>
  )
}
