import { createContext, useContext, ReactNode } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

type CartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: string
  quantity: number
}

type CartContextTypes = {
  addToCart: (id: string) => void
  getItemQuantity: (id: string) => number
  increaseCartQuantity: (id: string) => void
  decreaseCartQuantity: (id: string) => void
  removeFromCart: (id: string) => void
  cartQuantity: number
  cartItems: CartItem[]
}

const CartContext = createContext({} as CartContextTypes)

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("cart", [])

  const cartQuantity = cartItems.reduce((item) => item + 1, 0)

  function addToCart(id: string) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }]
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function getItemQuantity(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0
  }

  function increaseCartQuantity(id: string) {
    setCartItems((currentItems) => {
      return currentItems.map((item) => {
        if (item.id === id) {
          // Check to make sure the new quantity does not exceed 10
          const newQuantity = item.quantity + 1
          return {
            ...item,
            quantity: newQuantity <= 10 ? newQuantity : item.quantity,
          }
        } else {
          return item
        }
      })
    })
  }

  function decreaseCartQuantity(id: string) {
    setCartItems((currentItems) => {
      return currentItems.map((item) => {
        if (item.id === id) {
          // Check to make sure the new quantity does not go below 1
          const newQuantity = item.quantity - 1
          return {
            ...item,
            quantity: newQuantity >= 1 ? newQuantity : item.quantity,
          }
        } else {
          return item
        }
      })
    })
  }

  function removeFromCart(id: string) {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id)
    })
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
      }}>
      {children}
    </CartContext.Provider>
  )
}
