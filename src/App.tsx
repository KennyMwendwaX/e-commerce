import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ProductPage from "./pages/ProductPage"
import Cart from "./pages/Cart"
import Offcanvas from "./components/Offcanvas"
import Item from "./pages/Item"
import ProductList from "./components/ProductList"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path=":id" element={<Item />} />
            </Route>
            <Route path="products" element={<ProductList />} />
            <Route path="product" element={<ProductPage />} />
            <Route path="cart" element={<Cart />} />
            <Route path="canvas" element={<Offcanvas />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  )
}

export default App
